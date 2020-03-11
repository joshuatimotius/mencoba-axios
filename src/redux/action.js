import * as actiontypes from './actiontypes';

export const pushItem = item => ({
    type: actiontypes.pushItem, item
})

export const initData = data => ({
    type: actiontypes.initData, data
})