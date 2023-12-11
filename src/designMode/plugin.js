class Calculator{
    currentValue = 0;
    core = {
        plus(currentValue, addend) { return currentValue + addend },
        minus(currentValue, subtrahend) { return currentValue - subtrahend }
    };
    plugins = {};
    constructor() {

    }
    setValue(value) {
        this.currentValue = value;
        console.log(`value is:${this.currentValue}`);
    }
    press(buttonName, newVal) {
        const func = this.plugins[buttonName] || this.core[buttonName];
        this.setValue(func(this.currentValue, newVal));
    }
    register(plugin = {}) {
        const { name, exec } = plugin;
        this.plugins[name] = exec;
    }
}

const squarePlugin = {
    name: "square",
    exec(currentValue) {
        console.log(this)
        return currentValue * currentValue
    }
}

const calc = new Calculator();
calc.setValue(6);
calc.press('plus', 5);
calc.press('minus', 2);
calc.register(squarePlugin);
calc.press('square');