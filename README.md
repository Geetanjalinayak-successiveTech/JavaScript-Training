# JavaScript-Training

12 Factor App:
 
 The 12-Factor App is a methodology for building modern web applications that are:
 1) Portable 
 2) scalable
 3) Maintainable
 4) suitable for deployment on cloud platforms

 It was introduced by Heroku and widely used in modern we application especially for Saas and and microservices

 12 factors are:

 1) Codebase:
    There should be a single codebase per app, stored in version control (like git). Each such codebase must be managed in a version control system. 

 2) Dependencies:
    This factor states we must declare all the dependencies in the manifest file, a file containing the metadata for the dependencies, like name, version. This will help developers to speed up their development.

 3) Config :
    Configs (API keys, database URLs) should not be hardcoded.Store them in enviroment variables.Source code and configuration must be seperate from each other.

 4) Backing Services:
    Backing services are defined as any services that our application is consuming over the network.and our application must treat it as resources and can easily interchangeable.

  5) Build, Release, and Run:
    There are three non dependent phases for deployment 
    Buid: Convert code into executable bundle
    Release: Build with config is basically known as release
    Run: execute app in the enviroment  .

  6) Processes:
    All Persistant data must store in external databases. It should not store in local storage or memory. Beacuse when system crash or restart then no data will lost.

  7) PORT Binding:
    In this factor, The app should self-host via a port. It exports HTTP as a service and listens to all the requests hitting on that port.

  8) Concurrency:
    According to this factor, application must be divided into smaller different processes instead of a single large application. and each process work independently. It helps in horizantal scaling of application.

  9) Disposability:
    This factor define robustness. Robustness of an application means it should start and terminate gracefully without affecting the  overall application functionality.

  10) Development / Production Parity:
    This factor means our development and production enviroment must be as similar as possible.Like the processes, technologies and infrastructures should be same.

  11) Logs:
    whenever a request enters into the system corresponding logs are generated and act as sequence of events. so that it will be easy to debug when it needed.

  12)  Admin Processes:
    Some admin level tasks are required to execute as one-off process means command run manualy and ocaisionally. These tasks are not required very often and hence, we generally create a script for it .         
 

    

