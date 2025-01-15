import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Profile implements StarhiveObject {
    static readonly TYPE_ID: string = '0c650d59-4697-41a3-a6e3-066917ad980b'
    static readonly ATTRIBUTES_CREATED: string = '7ba3ff7e-c775-43d8-b7b4-c60566aca5dc'
    static readonly ATTRIBUTES_UPDATED: string = '752904af-0206-4f2e-8ef9-1ba5248f0187'
    static readonly ATTRIBUTES_AVATAR: string = '5a5074c3-9537-47ea-9b0d-9a52c99bcc3a'
    static readonly ATTRIBUTES_NAME: string = '900929f5-2c18-41d0-bc83-05f4faae9f44'
    static readonly ATTRIBUTES_BIO: string = '668c0b78-c1c1-4fcc-a8ca-507c9460220f'
    static readonly ATTRIBUTES_TITLE: string = '69578687-c130-44fe-9dfa-699554b7272a'
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
    private readonly _bio?: string
    getBio(): string | undefined {
        return this._bio
    }
    private readonly _title?: string
    getTitle(): string | undefined {
        return this._title
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_NAME, []);
        }
        if (this._bio !== undefined) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_BIO, [this._bio]);
        } else {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_BIO, []);
        }
        if (this._title !== undefined) {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_TITLE, [this._title]);
        } else {
          visitor.visitTextAttribute(Profile.ATTRIBUTES_TITLE, []);
        }
    }
    getTypeId(): string {
        return Profile.TYPE_ID
    }
    static builder(): ProfileBuilder {
        return new ProfileBuilder()
    }
    constructor(builder: ProfileBuilder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._bio = builder.getBio()
        this._title = builder.getTitle()
    }
    toBuilder(): ProfileBuilder {
        const builder = Profile.builder()
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
        if (this._bio) {
          builder.bio(this._bio)
        }
        if (this._title) {
          builder.title(this._title)
        }
        return builder
    }
}
export class ProfileBuilder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): ProfileBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): ProfileBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): ProfileBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): ProfileBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): ProfileBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): ProfileBuilder {
        this._name = value
        return this
    }
    private _bio?: string
    getBio(): string | undefined {
        return this._bio
    }
    bio(value: string): ProfileBuilder {
        this._bio = value
        return this
    }
    private _title?: string
    getTitle(): string | undefined {
        return this._title
    }
    title(value: string): ProfileBuilder {
        this._title = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): ProfileBuilder {
        this._id = value
        return this
    }
    build(): Profile {
        return new Profile(this);
    }
}
