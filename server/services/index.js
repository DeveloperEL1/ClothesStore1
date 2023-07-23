const generateUserMethods = Model => {
    return {
        getAll: () => Model.find(),
        getById: () => Model.getById(),
        create: (record) => Model.create(record)
    }
}