import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { DocumentNode, GraphQLSchema, Source } from 'graphql'
import { NonEmptyArray } from 'type-graphql'

export function loadResolverDirectories(
    path: NonEmptyArray<string>,
    others: unknown[] = []
): unknown[] {
    const loader = loadFilesSync([...path], {
        recursive: true,
        extensions: ['ts'],
    })

    return mergeResolvers(loader.concat(others))
}

export function loadTypeDirectories(
    path: NonEmptyArray<string>,
    others: Array<string | Source | DocumentNode | GraphQLSchema> = []
): DocumentNode {
    const loader = loadFilesSync([...path], {
        recursive: true,
        extensions: ['gql', 'graphql'],
    })

    return mergeTypeDefs(loader.concat(others))
}
