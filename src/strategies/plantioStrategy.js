import { api } from "../api/index.js"

export default class PlantioStrategy {

    async _takeOrders(){
        const {data} = await api.get('/plant/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNOrders: data }
    }

    async _takeSpacing(){
        const {data} = await api.get('/espacam/filtro?instancias=31&fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNSpacing: data } 
    }

    async _takeFronts(){
        const {data} = await api.get('/frentPlant/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNFronts: data } 
    }

    async _takeSystems(){
        const {data} = await api.get('/sistplans/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNSystems: data }
    }

    async _takeFarms(){
        const { data } = await api.get('/histprepro/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNFarms: data }
    }

    async _takeVarieties(){
        const { data } = await api.get('/variedade/filtro?fgControle=I&app_dt_lastupdate=2021-12-31')

        return { PLNVarieties: data } 
    }

    async _takeDependencies(){
        const promisses =  [
            this._takeOrders(),
            this._takeSystems(),
            this._takeSpacing(),
            this._takeFronts(),
            this._takeVarieties(),
            this._takeFarms()
        ]

        const result = await Promise.allSettled(promisses)

        const containsRejected = result.find(call => call.status === 'rejected')

        if(containsRejected) return containsRejected

        const values = result.reduce((acc, call) => ({...acc, ...call.value}), {})
        
        return values
    }

    async sycronization(){
        const dependencies = await this._takeDependencies()
        console.log(Object.keys(dependencies))
        console.log('Plantio Sync')
    }
}