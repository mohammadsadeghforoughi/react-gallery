# React gallery using React, SASS, and TypeScript with Unit test
Simple React Gallery -  [Live demo](https://mohammadsadeghforoughi.github.io/react-gallery/) 

### Note: Disable CORS on your browser to load data from `https://apimocha.com/bearbulltraders/api`, because it will drop http requests.   

## Project Stack
- React.js
- SASS
- TypeScript
- Axios
- Jest
- Prettier 

----------
## Run instruction

There is two way to run this project: 

### Docker
You can run project with Docker. Run these commands to run the project.  
**Note: Your machine must contain `Docker`  

1- Clone repository   
 `git clone https://github.com/mohammadsadeghforoughi/react-gallery.git`   

2- Build the Docker Container  
`docker build --build-arg REACT_APP_BASE_URL=https://apimocha.com/bearbulltraders/api -t react-gallery  .`  

3- Run the container  
`docker run -d -p 5500:80 --name react-gallery-container react-gallery`

4- Open your browser and enter [http://localhost:5500](http://localhost:5500)

----------


### Using React Scripts
To run project with `react-scripts`, run these lines blow:    
1- Clone repository   
 `git clone https://github.com/mohammadsadeghforoughi/react-gallery.git`   
2- Install dependencies  
 `yarn`  
3- Rename the .env.template to .env add rewrite your custom `REACT_APP_BASE_URL` value.  
4- Start Tests    
 `yarn test`  
5- Start the project   
 `yarn start`   
6- Open your browser and enter [http://localhost:3000](http://localhost:3000)