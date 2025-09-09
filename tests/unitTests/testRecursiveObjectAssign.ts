import { recursiveObjectAssign } from '../../src/typescript/gameHelpers';

const object1 = {
    prop1 : 'I am a string',
    prop2 : {
        nestedProp1: 'I am a nested prop'
    },
    prop3 : 3,
}

const object2 = {
        prop1 : 'I am a different string',
    prop2 : {
        nestedProp2: 'I am a different nested prop'
    },
}
// Still need to test deeply nested props
recursiveObjectAssign(object1, object2)