
export const isNotEmptyNextCell = (state) => {
    const x = state.figureX + 1
    const y = state.figureY
    const isUndefinedNextRow = state.field[x] === undefined
    if (isUndefinedNextRow) {
        return true
    }
    return !!state.field[x][y]
}

export const isNotLeftBorder = state => state.figureY - 1 >= 0
export const isNotRightBorder = state => state.figureY + 1 <= 6

export const isNotEmptyLeftCell = state => !!state.field[state.figureX][state.figureY - 1]
export const isNotEmptyRightCell = state => !!state.field[state.figureX][state.figureY + 1]
