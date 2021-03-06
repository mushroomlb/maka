class actionFactory {
    constructor() {
        this.actions = {}
    }

    registerAction(name, action, isFunction) {
        if (this.actions[name]) {
            console.log(`Action already exists. name: ${name}, please ignore!`)
        }

        if(isFunction){
            action._isFunction = true
        }
        this.actions[name] = action
    }


    registerActions(actions) {
        if (!actions || actions.length == 0)
            return
        actions.forEach(c => this.registerAction(c.name, c.action, c.isFunction))
    }

    getAction(name) {
        if (!name)
            throw `Action name cannot be empty`

        var action = this.actions[name]

        if (!action) {
            throw `Can't find action,name:${name}`
        }

        return action
    }

}

const instance = new actionFactory()

export default instance