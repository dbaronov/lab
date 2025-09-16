import { memo } from "react"
import { TagFilter } from "../../schema"

// Further abstration needed?
// const CheckBoxGroup = (props: {options: string[], selected: string[], onChange: (newSelected: string[]) => void}) => {

//     const handleCheck = (option: string) => {

//     }
//     return (
//         <div className="checkbox-group">
//             {props.options.map(option => {
//                 return (
//                     <>
//                     <label></label>
//                     <input type="checkbox" checked={props.selected.includes(option)} onChange={() => handleCheck(option)} />
//                     </>
//                 )
//             })}
//         </div>
//     )
// }


interface TagFiltersSelectionProps {
  tags: TagFilter[],
  selected: string[],
  onChange: (tagValue: string[]) => void
}

export const TagFiltersSection = memo((props: TagFiltersSelectionProps) => {

  const handleCheck = (tagId: string) => {
    const selectedSet = new Set(props.selected)

    selectedSet.has(tagId) ? selectedSet.delete(tagId) : selectedSet.add(tagId)
    props.onChange(Array.from(selectedSet))
  }

  return (
    <div className="tag-filters">
      {props.tags.map((tag, index) =>
        <div key={`${tag.filterId}${index}`} className="tag-section">
          <h3>{tag.filterTitle}</h3>
          <div className="tag-filters_tags">
            {tag.filterOptions.map((opt, index) =>
              <div className="tag-filters_tag" key={`${opt.id}${index}`}>
                <label htmlFor={opt.id}>
                  <input
                    type="checkbox"
                    value={opt.id}
                    name={tag.filterId}
                    id={opt.id}
                    onChange={_ => handleCheck(`${tag.filterId}:${opt.id}`)}
                    defaultChecked={false}
                    className="tag-optinon"
                  >
                  </input>
                  {opt.title}</label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
})
