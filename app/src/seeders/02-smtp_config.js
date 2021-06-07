module.exports = {
    up: async (queryInterface) => {
        queryInterface.bulkInsert(
            'SmtpConfigs',
            [
                {
                    id: 1,
                    username: 'admin',
                    password: 'super_secret1',
                    host: 'localhost',
                    port: '347',
                    secure: true,
                    tenantId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 1,
                    username: 'manager',
                    password: 'super_password',
                    host: 'otherhost',
                    port: '346',
                    secure: false,
                    tenantId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },
    down: async (queryInterface) => {
        queryInterface.bulkDelete('SmtpConfigs', null, {})
    },
}
