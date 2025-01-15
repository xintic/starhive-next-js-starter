import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Contact implements StarhiveObject {
    static readonly TYPE_ID: string = '35f31d0f-b22f-48a8-928b-807c6e42cb5c'
    static readonly ATTRIBUTES_CREATED: string = 'fcacaea1-4428-4129-b469-910999acb623'
    static readonly ATTRIBUTES_UPDATED: string = '33bf133e-a430-48f4-9350-3f2d489e8c8e'
    static readonly ATTRIBUTES_AVATAR: string = '55d9a1f7-2e9d-488f-bf44-fd68c9aa00c2'
    static readonly ATTRIBUTES_NAME: string = '04cfe408-01fa-43d7-92d4-afcc688d818b'
    static readonly ATTRIBUTES_E_MAIL: string = 'e7dc0e57-a662-445e-9232-279c2e422306'
    static readonly ATTRIBUTES_MESSAGE: string = '87d3d254-c4f9-457d-a78d-eed0d5438727'
    static readonly ATTRIBUTES_NOTES: string = '0d3a2734-c03d-4562-b6d3-bf363f3a835d'
    static readonly ATTRIBUTES_HAVE_I_RESPONDED_: string = '50cc6e30-025a-43dd-ad7a-72a8125ba204'
    private readonly _id?: string
    getId(): string | undefined {
        return this._id
    }
    private readonly _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    private readonly _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    private readonly _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    private readonly _avatarContentKey?: string | null
    private readonly _name?: string
    getName(): string | undefined {
        return this._name
    }
    private readonly _eMail?: string
    getEMail(): string | undefined {
        return this._eMail
    }
    private readonly _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    private readonly _notes?: string
    getNotes(): string | undefined {
        return this._notes
    }
    private readonly _haveIResponded_?: boolean
    getHaveIResponded_(): boolean | undefined {
        return this._haveIResponded_
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, []);
        }
        if (this._eMail !== undefined) {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_E_MAIL, [this._eMail]);
        } else {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_E_MAIL, []);
        }
        if (this._message !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, [this._message]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, []);
        }
        if (this._notes !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NOTES, [this._notes]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NOTES, []);
        }
        if (this._haveIResponded_ !== undefined) {
          visitor.visitBooleanAttribute(Contact.ATTRIBUTES_HAVE_I_RESPONDED_, [this._haveIResponded_]);
        } else {
          visitor.visitBooleanAttribute(Contact.ATTRIBUTES_HAVE_I_RESPONDED_, []);
        }
    }
    getTypeId(): string {
        return Contact.TYPE_ID
    }
    static builder(): ContactBuilder {
        return new ContactBuilder()
    }
    constructor(builder: ContactBuilder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._eMail = builder.getEMail()
        this._message = builder.getMessage()
        this._notes = builder.getNotes()
        this._haveIResponded_ = builder.getHaveIResponded_()
    }
    toBuilder(): ContactBuilder {
        const builder = Contact.builder()
        if (this._id) {
          builder.id(this._id)
        }
        if (this._created) {
          builder.created(this._created)
        }
        if (this._updated) {
          builder.updated(this._updated)
        }
        if (this._avatar) {
          builder.avatar(this._avatar)
        }
        if (this._name) {
          builder.name(this._name)
        }
        if (this._eMail) {
          builder.eMail(this._eMail)
        }
        if (this._message) {
          builder.message(this._message)
        }
        if (this._notes) {
          builder.notes(this._notes)
        }
        if (this._haveIResponded_) {
          builder.haveIResponded_(this._haveIResponded_)
        }
        return builder
    }
}
export class ContactBuilder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): ContactBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): ContactBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): ContactBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): ContactBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): ContactBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): ContactBuilder {
        this._name = value
        return this
    }
    private _eMail?: string
    getEMail(): string | undefined {
        return this._eMail
    }
    eMail(value: string): ContactBuilder {
        this._eMail = value
        return this
    }
    private _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    message(value: string): ContactBuilder {
        this._message = value
        return this
    }
    private _notes?: string
    getNotes(): string | undefined {
        return this._notes
    }
    notes(value: string): ContactBuilder {
        this._notes = value
        return this
    }
    private _haveIResponded_?: boolean
    getHaveIResponded_(): boolean | undefined {
        return this._haveIResponded_
    }
    haveIResponded_(value: boolean): ContactBuilder {
        this._haveIResponded_ = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): ContactBuilder {
        this._id = value
        return this
    }
    build(): Contact {
        return new Contact(this);
    }
}
