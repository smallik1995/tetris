
export const saveFigure = ({ commit }) => {
    commit('saveFigure')
    commit('initialState')
}

export const down = ({ commit, getters, dispatch }) => {
    if (!getters.isNotEmptyNextCell) {
        commit('downFigure')
    } else {
        dispatch('saveFigure')
    }
    commit('draw')
}

export const left = ({ commit, getters, dispatch }) => {
    if (!getters.isNotEmptyNextCell && getters.isNotLeftBorder && !getters.isNotEmptyLeftCell) {
        commit('leftFigure')
        commit('draw')
    }
    if (getters.isNotEmptyNextCell) {
        dispatch('saveFigure')
    }
}

export const right = ({ commit, getters, dispatch }) => {
    if (!getters.isNotEmptyNextCell && getters.isNotRightBorder && !getters.isNotEmptyRightCell) {
        commit('rightFigure')
        commit('draw')
    }
    if (getters.isNotEmptyNextCell) {
        dispatch('saveFigure')
    }
}
