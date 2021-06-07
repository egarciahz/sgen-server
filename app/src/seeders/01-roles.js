module.exports = {
    up: async (queryInterface) => {
        queryInterface.bulkInsert(
            'Roles',
            [
                {
                    id: 1,
                    name: 'administrator',
                    level: 4,
                    description: 'all permissions granted',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'inspector',
                    level: 3,
                    description: 'admin user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    name: 'manager',
                    level: 2,
                    description: 'integrator user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    name: 'employee',
                    level: 1,
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
