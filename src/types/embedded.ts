import type { Tag } from './tag'
export interface EmbeddedContact {
    /** ID контакта */
    id: number
    /** Флаг, показывающий, является контакт главным или нет */
    is_main?: string
}

/** Модель компании, добавляемой к сделке. */
export interface EmbeddedCompany {
    /** ID компании */
    id: number
}

export interface EmbeddedSource {
    /** Внешний ID источника. Источник можно добавить с помощью API Источников.
     * Если передан external_id источника и не передан pipeline_id,
     * сделка будет добавлена в воронку, в которой находится источник. */
    externail_id: number
    /** Тип источника. Для сделок, добавляемых интеграциями, поддерживается только `widget` */
    type: string
}

export interface Embedded {
    /** Данные тегов */
    tags: Array<Tag> | null
}

export interface LeadEmbedded {
    /** Данные тегов, добавляемых к сделке */
    tags: Array<Tag> | null
    /* 	Данные контактов, которые будет прикреплены к сделке */
    contacts?: Array<EmbeddedContact>
    /** Данные компании, которая будет прикреплена к сделке */
    companies?: Array<EmbeddedCompany> //
    source?: EmbeddedSource
}
