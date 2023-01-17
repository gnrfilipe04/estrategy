import { api } from "../api/index.js"

export default class PlantioStrategy {

    async _takeOrder(){
        const {data} = await api.get('/plant/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return data
    }

    async _takeSpacing(){
        const {data} = await api.get('/plant/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return data
    }

    async _takeFronts(){
        
    }

    async _takeSystems(){
        
    }

    async _takeFarms(){

    }

    async _takeVarieties(){

    }

    async _takeDependencies(){

    }

    async sycronization(){
        console.log('Plantio Sync')
    }
}