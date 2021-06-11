module.exports = {
    up: async (queryInterface) => {
        queryInterface.bulkInsert(
            'Roles',
            [
                {
                    id: 1,
                    name: 'administrator',
                    level: 4,
                    isSpecial: true,
                    description: 'all permissions granted',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    name: 'manager',
                    level: 2,
                    isSpecial: false,
                    description: 'integrator user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    name: 'user',
                    level: 1,
                    isSpecial: false,
                    description: 'normal user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },
    down: async (queryInterface) => {
        queryInterface.bulkDelete('Roles', null, {})
    },
}
