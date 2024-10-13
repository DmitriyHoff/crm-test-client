import type { Tag } from './tag'
import type { Embedded } from './embedded'

export interface Company {
    /** Название компании */
    name?: string
    /** ID пользователя, ответственного за компанию */
    responsible_user_id?: number
    /** ID пользователя, создавшего компанию */
    created_by?: number
    /** ID пользователя, изменившего компанию */
    updated_by?: number
    /** Дата создания компании, передается в Unix Timestamp */
    created_at?: number
    /** Дата изменения компании, передается в Unix Timestamp */
    updated_at?: number
    /** Массив, содержащий информацию по значениям дополнительных полей, заданных для данной компании. */
    custom_fields_values?: Array<any>
    /** Массив тегов для добавления. */
    tags_to_add?: Array<Tag>
    /** Данные вложенных сущностей */
    _embedded?: Embedded
    /** Поле, которое вернется вам в ответе без изменений и не будет сохранено. */
    request_id?: string
}
