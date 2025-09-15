# Lab: DevOps Experiments & Projects

This repository contains my experiments and practical projects in the field of DevOps, focusing on:

- **Containerization**
  - Docker: images, containers, and multi-stage builds
  - Kubernetes (planned/experimental)
- **Deployment Automation**
  - Automated deployments to AWS infrastructure
  - Infrastructure-as-Code and CI/CD concepts

## Main Project: Event List React App

The `event-list-react-docker` directory contains a sample React application, demonstrating:

- Modern React (TypeScript) development
- Component-based architecture
- Unit and integration testing
- Containerization with Docker and Docker Compose
- Production-ready deployment using Nginx

### Quick Start

See [`event-list-react-docker/README.md`](event-list-react-docker/README.md) for full details.

#### Build and Run with Docker

```sh
cd event-list-react-docker
docker build -t event-list-react .
docker run -p 80:80 event-list-react
```

#### Or use Docker Compose
docker-compose up --build -d

The app will be available at http://localhost:80.

### Structure
event-list-react-docker/ — React app with Docker/Nginx deployment
Other folders — Reserved for future DevOps, Kubernetes, and AWS automation experiments

### License
This repository is for personal learning and experimentation.

