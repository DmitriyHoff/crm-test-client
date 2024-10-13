import type { Tag } from './tag'
import type { LeadEmbedded } from './embedded'

export interface Lead {
    /** Название сделки. */
    name?: string
    /** Бюджет сделки. */
    price?: number
    /** ID статуса, в который добавляется сделка., по-умолчанию – первый этап главной воронки */
    status_id?: number
    /** ID воронки, в которую добавляется сделка. */
    pipeline_id?: number
    /** ID пользователя, создающий сделку. При передаче значения 0, сделка будет считаться созданной роботом. */
    created_by?: number
    /** ID пользователя, изменяющий сделку. При передаче значения 0, сделка будет считаться измененной роботом. */
    updated_by?: number
    /** Дата закрытия сделки, передается в Unix Timestamp. */
    closed_at?: number
    /** Дата создания сделки, передается в Unix Timestamp. */
    created_at?: number
    /** Дата изменения сделки, передается в Unix Timestamp. */
    updated_at?: number
    /** ID причины отказа. */
    loss_reason_id?: number
    /** ID пользователя, ответственного за сделку. */
    responsible_user_id?: number
    /** Массив, содержащий информацию по дополнительным полям, заданным для данной сделки.*/
    custom_fields_values?: Array<any>
    /** Массив тегов для добавления. */
    tags_to_add?: Array<Tag>
    /** Данные вложенных сущностей, при создании и редактировании можно передать только теги. */
    _embedded?: LeadEmbedded
}
