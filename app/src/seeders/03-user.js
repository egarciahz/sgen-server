module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Users', [
            {
                id: 1,
                email: 'admin@kyros.com',
                hash: '2bafb095633ee44fe8f2b43ca6453ed8cdaa9b874198659ca8eb8dced4bd6fa0c8d3554f363f327c6611dc44110ca7c841bf7caa9a02dd66d3bb3b964c1f2ecd58bfb152a15f771fe9637d045267fc9b62368b8843701b913e4bb19c3db90bb117ce69df',
                salt: '8528f9646ed67dd24f598bad467b6c3c9dcd5623d030b8cd3d4b3b66b5ba4e57',
                ownerId: 1,
                tenantId: 1,
                verify: true,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
        await queryInterface.bulkInsert('UserRoles', [
            {
                userId: 1,
                roleId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Users', null, {})
        await queryInterface.bulkDelete('UserRoles', null, {})
    },
}
