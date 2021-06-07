module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'Tenants',
            [
                {
                    id: 1,
                    name: 'Kyros',
                    token: 'kyr0s_1nc/ve',
                    description: 'Venezuela, Kyros Inc',
                    passPhrase: '0123456789asdfgh', // up to 16 characters
                    availableLicenceCount: 20,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'AT&T',
                    token: 'at&t_venezuelan412',
                    description: 'Chile, AT&T Cop',
                    passPhrase: '0123456789asdfgh', // up to 16 characters
                    availableLicenceCount: 20,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Tenants', null, {})
    },
}
