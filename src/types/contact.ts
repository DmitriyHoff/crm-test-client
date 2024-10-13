import type { Tag } from './tag'
import type { Embedded } from './embedded'

export interface Contact {
    /** 	Название контакта */
    name?: string
    /** Имя контакта */
    first_name?: string
    /** Фамилия контакта */
    last_name?: string
    /** ID пользователя, ответственного за контакт */
    responsible_user_id?: number
    /** ID пользователя, создавший контакт */
    created_by?: number
    /** ID пользователя, изменивший контакт */
    updated_by?: number
    /** Дата создания контакта, передается в Unix Timestamp */
    created_at?: number
    /** Дата изменения контакта, передается в Unix Timestamp */
    updated_at?: number
    /** Массив, содержащий информацию по значениям дополнительных полей, заданных для данного контакта */
    custom_fields_values?: Array<any>
    /** Массив тегов для добавления. */
    tags_to_add?: Array<Tag>
    /** Данные вложенных сущностей */
    _embedded?: Embedded
    /** Поле, которое вернется вам в ответе без изменений и не будет сохранено. */
    request_id?: string
}
