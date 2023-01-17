export default class ContextStrategy {
    constructor(strategy){
        this.strategy = strategy
    }

    async sycronization(){
        return await this.strategy.sycronization()
    }
}