[@engagespot/notifications](../README.md) › [Globals](../globals.md) › ["instance"](../modules/_instance_.md) › [EngagespotPushService](_instance_.engagespotpushservice.md)

# Class: EngagespotPushService

## Hierarchy

* **EngagespotPushService**

## Index

### Constructors

* [constructor](_instance_.engagespotpushservice.md#constructor)

### Properties

* [axiosInstance](_instance_.engagespotpushservice.md#axiosinstance)
* [message](_instance_.engagespotpushservice.md#message)
* [options](_instance_.engagespotpushservice.md#options)

### Methods

* [addIdentifiers](_instance_.engagespotpushservice.md#addidentifiers)
* [send](_instance_.engagespotpushservice.md#send)
* [setMessage](_instance_.engagespotpushservice.md#setmessage)

## Constructors

###  constructor

\+ **new EngagespotPushService**(`axiosInstance`: AxiosInstance, `options`: [InstanceOptions](../interfaces/_types_.instanceoptions.md)): *[EngagespotPushService](_instance_.engagespotpushservice.md)*

Defined in instance.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`axiosInstance` | AxiosInstance |
`options` | [InstanceOptions](../interfaces/_types_.instanceoptions.md) |

**Returns:** *[EngagespotPushService](_instance_.engagespotpushservice.md)*

## Properties

###  axiosInstance

• **axiosInstance**: *AxiosInstance*

Defined in instance.ts:15

___

###  message

• **message**: *[Message](../interfaces/_types_.message.md)* = {} as Message

Defined in instance.ts:13

___

###  options

• **options**: *[InstanceOptions](../interfaces/_types_.instanceoptions.md)*

Defined in instance.ts:16

## Methods

###  addIdentifiers

▸ **addIdentifiers**(`identifiers`: [Identifier](../modules/_types_.md#identifier)[]): *[EngagespotPushService](_instance_.engagespotpushservice.md)*

Defined in instance.ts:32

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | [Identifier](../modules/_types_.md#identifier)[] | The message object |

**Returns:** *[EngagespotPushService](_instance_.engagespotpushservice.md)*

___

###  send

▸ **send**(): *Promise‹[NotificationAPIResponse](../interfaces/_types_.notificationapiresponse.md)›*

Defined in instance.ts:40

**Returns:** *Promise‹[NotificationAPIResponse](../interfaces/_types_.notificationapiresponse.md)›*

___

###  setMessage

▸ **setMessage**(`message`: [Message](../interfaces/_types_.message.md)): *[EngagespotPushService](_instance_.engagespotpushservice.md)*

Defined in instance.ts:23

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [Message](../interfaces/_types_.message.md) | The message object |

**Returns:** *[EngagespotPushService](_instance_.engagespotpushservice.md)*
