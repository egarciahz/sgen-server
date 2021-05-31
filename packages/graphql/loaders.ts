/* eslint-disable @typescript-eslint/no-explicit-any */
import { mergeResolvers, mergeTypeDefs, } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { DocumentNode, GraphQLSchema, Source } from 'graphql';

export function loadResolverDirectories(path: string, others: any[] = []): any[] {
    const loader = loadFilesSync(path, {
        recursive: true,
        extensions: ['ts']
    });

    return mergeResolvers(loader.concat(others));
}

export function loadTypeDirectories(path: string, others: Array<string | Source | DocumentNode | GraphQLSchema> = []): DocumentNode {
    const loader = loadFilesSync(path, {
        recursive: true,
        extensions: ['gql']
    });

    return mergeTypeDefs(loader.concat(others));
}
