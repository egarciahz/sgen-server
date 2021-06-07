module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('People', [
            {
                id: 1,
                firstname: 'John',
                lastname: 'Whick',
                dateOfBirth: new Date(),
                gender: 'Male',
                tenantId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])

        await queryInterface.bulkInsert(
            'Phones',
            [
                {
                    id: 1,
                    number: '+58 254 777 7777',
                    type: 'Local',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )

        await queryInterface.bulkInsert(
            'PersonPhones',
            [
                {
                    phoneId: 1,
                    personId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('People', null, {})
        await queryInterface.bulkDelete('Phones', null, {})
        await queryInterface.bulkDelete('PersonPhones', null, {})
    },
}
