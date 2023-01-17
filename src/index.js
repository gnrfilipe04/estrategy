import ContextStrategy from "./base/contextStrategy.js";
import PlantioStrategy from "./strategies/plantioStrategy.js";
import ProducaoStrategy from "./strategies/producaoStrategy.js";

const data = {
    PRD: new ProducaoStrategy(),
    PLN: new PlantioStrategy(),
}

const userTypes = [
    'PRD',
    'PLN'
]

/* userTypes.forEach(type => {
    const contextStrategy = new ContextStrategy(data[type])
    contextStrategy.sycronization()
}) */

for(const type of userTypes){
    const contextStrategy = new ContextStrategy(data[type])
    contextStrategy.sycronization()
}
