interface BaseTag {
    /** ID тега для добавления. Важно передать или id или name. */
    id?: number
    /** Название тега для добавления. Важно передать или id или name. */
    name?: string
}

interface TagWithId extends BaseTag {
    id: number
    name?: string
}

interface TagWithName extends BaseTag {
    id?: number
    name: string
}

// обязательно одно из полей
export type Tag = TagWithId | TagWithName
