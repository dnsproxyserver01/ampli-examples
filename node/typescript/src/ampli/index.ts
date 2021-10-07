/**
 * Ampli - A strong typed wrapper for your Analytics
 * 
 * This file is generated by Amplitude.
 * To update run 'ampli pull node-ts-ampli'
 * 
 * Required dependencies: @amplitude/node@^1.8.5
 * Tracking Plan Version: 0
 * Build: 1.0.0
 *
 * Tracking Plan:
 * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/latest
 *
 * Full setup Instuctions:
 * https://data.amplitude.com/test-codegen/Test%20Codegen/implementation/node-ts-ampli
 */

import { Identify as AmplitudeIdentify } from '@amplitude/identify';
import { init as initNodeClient, NodeClient } from '@amplitude/node';
import { BaseEvent, Event, Extra, EventOptions, IdentifyOptions, GroupOptions, Options } from '@amplitude/types';

export enum Environment {
  development = 'development',
  production = 'production'
}

export const ApiKey: Record<Environment, string> = {
  development: '',
  production: ''
};

/**
* Default NodeClient Options. Contains tracking plan information.
*/
export const DefaultOptions: Partial<Options> = {
  plan: {
    version: '0',
    branch: 'main',
    source: 'node-ts-ampli'
  }
};

export interface EventProperties {
    Context?:                       ContextProperties;
    EventMaxIntForTest?:            EventMaxIntForTestProperties;
    EventNoProperties?:             EventNoPropertiesProperties;
    EventObjectTypes?:              EventObjectTypesProperties;
    EventWithAllProperties?:        EventWithAllPropertiesProperties;
    EventWithArrayTypes?:           EventWithArrayTypesProperties;
    EventWithConstTypes?:           EventWithConstTypesProperties;
    EventWithDifferentCasingTypes?: EventWithDifferentCasingTypesProperties;
    EventWithEnumTypes?:            EventWithEnumTypesProperties;
    EventWithOptionalArrayTypes?:   EventWithOptionalArrayTypesProperties;
    EventWithOptionalProperties?:   EventWithOptionalPropertiesProperties;
    Group?:                         GroupProperties;
    Identify?:                      IdentifyProperties;
}

export interface ContextProperties {
}

/**
 * Event to test schema validation
 */
export interface EventMaxIntForTestProperties {
    /**
     * property to test schema validation
     */
    intMax10: number;
}

/**
 * Event w no properties description
 */
export interface EventNoPropertiesProperties {
}

/**
 * Event with Object and Object Array
 */
export interface EventObjectTypesProperties {
    /**
     * Property Object Type
     */
    requiredObject: { [key: string]: any };
    /**
     * Property Object Array Type
     */
    requiredObjectArray: { [key: string]: any }[];
}

/**
 * Event w all properties description
 */
export interface EventWithAllPropertiesProperties {
    /**
     * Event 2 Property - Optional String    *     * Examples:    * Some string, or another
     */
    optionalString?: string;
    /**
     * Event 2 Property - Array
     */
    requiredArray: string[];
    /**
     * Event 2 Property - Boolean
     */
    requiredBoolean: boolean;
    /**
     * Event 2 Property - Enum
     */
    requiredEnum: RequiredEnum;
    /**
     * Event 2 Property - Integer    *     * Examples:    * 5, 4, 3
     */
    requiredInteger: number;
    /**
     * Event 2 Property - Number
     */
    requiredNumber: number;
    /**
     * Event 2 Property - String
     */
    requiredString: string;
}

/**
 * Event 2 Property - Enum
 */
export enum RequiredEnum {
    Enum1 = "Enum1",
    Enum2 = "Enum2",
}

/**
 * Description for event with Array Types
 */
export interface EventWithArrayTypesProperties {
    /**
     * description for required boolean array
     */
    requiredBooleanArray: boolean[];
    /**
     * Description for required number array
     */
    requiredNumberArray: number[];
    /**
     * Description for required object array
     */
    requiredObjectArray: { [key: string]: any }[];
    /**
     * description for required string array
     */
    requiredStringArray: string[];
}

/**
 * Description for event with const types
 */
export interface EventWithConstTypesProperties {
}

/**
 * Description for case with space
 */
export interface EventWithDifferentCasingTypesProperties {
    /**
     * Description for enum with space
     */
    "enum with space": EnumWithSpace;
    /**
     * description_for_enum_snake_case
     */
    enum_snake_case: EnumSnakeCase;
    /**
     * descriptionForEnumCamelCase
     */
    enumCamelCase: EnumCamelCase;
    /**
     * DescirptionForEnumPascalCase
     */
    EnumPascalCase: EnumPascalCase;
    /**
     * Description for case with space
     */
    "property with space": string;
    /**
     * Description_for_snake_case
     */
    property_with_snake_case: string;
    /**
     * descriptionForCamelCase
     */
    propertyWithCamelCase: string;
    /**
     * DescriptionForPascalCase
     */
    PropertyWithPascalCase: string;
}

/**
 * DescirptionForEnumPascalCase
 */
export enum EnumPascalCase {
    EnumPascalCase = "EnumPascalCase",
}

/**
 * Description for enum with space
 */
export enum EnumWithSpace {
    EnumWithSpace = "enum with space",
}

/**
 * descriptionForEnumCamelCase
 */
export enum EnumCamelCase {
    EnumCamelCase = "enumCamelCase",
}

/**
 * description_for_enum_snake_case
 */
export enum EnumSnakeCase {
    EnumSnakeCase = "enum_snake_case",
}

/**
 * Description for event with enum types
 */
export interface EventWithEnumTypesProperties {
    /**
     * Description for required enum
     */
    "optional enum"?: OptionalEnum;
    /**
     * Description for optional enum
     */
    "required enum": RequiredEnumEnum;
}

/**
 * Description for required enum
 */
export enum OptionalEnum {
    OptionalEnum1 = "optional enum 1",
    OptionalEnum2 = "optional enum 2",
}

/**
 * Description for optional enum
 */
export enum RequiredEnumEnum {
    RequiredEnum1 = "required enum 1",
    RequiredEnum2 = "required enum 2",
}

/**
 * Description for event with optional array types
 */
export interface EventWithOptionalArrayTypesProperties {
    /**
     * Description for optional boolean array
     */
    optionalBooleanArray?: boolean[];
    /**
     * Description for optional object array
     */
    optionalJSONArray?: { [key: string]: any }[];
    /**
     * Description for optional number array
     */
    optionalNumberArray?: number[];
    /**
     * Description for optional string array
     */
    optionalStringArray?: string[];
}

/**
 * Event w optional properties description
 */
export interface EventWithOptionalPropertiesProperties {
    optionalArrayNumber?: number[];
    optionalArrayString?: string[];
    optionalBoolean?:     boolean;
    optionalNumber?:      number;
    /**
     * Optional String property description
     */
    optionalString?: string;
}

export interface GroupProperties {
    /**
     * Description for group optionalString
     */
    optionalString?: string;
    /**
     * Description for group requiredBoolean
     */
    requiredBoolean: boolean;
}

export interface IdentifyProperties {
    /**
     * Description for identify optionalArray
     */
    optionalArray?: string[];
    /**
     * Description for identify requiredNumber
     */
    requiredNumber: number;
}


export class Context implements BaseEvent {
  event_type = 'Context';
  plan = {
    event_id: 'context',
    event_version: '0.0.0',
  };
  constructor() {}
}
export class Identify implements BaseEvent {
  event_type = 'Identify';
  plan = {
    event_id: 'identify',
    event_version: '0.0.0',
  };
  event_properties: IdentifyProperties;

  constructor(event_properties: IdentifyProperties) {
    this.event_properties = event_properties;
  }
}
export class Group implements BaseEvent {
  event_type = 'Group';
  plan = {
    event_id: 'group',
    event_version: '0.0.0',
  };
  event_properties: GroupProperties;

  constructor(event_properties: GroupProperties) {
    this.event_properties = event_properties;
  }
}

export class EventMaxIntForTest implements BaseEvent {
  event_type = 'EventMaxIntForTest';
  plan = { 
    event_id: 'aa0f08ac-8928-4569-a524-c1699e7da6f4',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties: EventMaxIntForTestProperties,
  ) {}
}

export class EventNoProperties implements BaseEvent {
  event_type = 'Event No Properties';
  plan = { 
    event_id: '26af925a-be3a-40e5-947d-33da66a5352f',
    event_version: '1.0.0',
  };
}

export class EventObjectTypes implements BaseEvent {
  event_type = 'Event Object Types';
  plan = { 
    event_id: 'aea72ecc-5a10-4bd7-99a6-81a464aabaed',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties: EventObjectTypesProperties,
  ) {}
}

export class EventWithAllProperties implements BaseEvent {
  event_type = 'Event With All Properties';
  plan = { 
    event_id: '311ba144-8532-4474-a9bd-8b430625e29a',
    event_version: '1.0.0',
  };
  event_properties: EventWithAllPropertiesProperties & {
    'requiredConst': "some-const-value";
  };

  constructor(
    event_properties: EventWithAllPropertiesProperties,
  ) {
    this.event_properties = {
        ...event_properties,
        'requiredConst': "some-const-value",
      };
  }
}

export class EventWithArrayTypes implements BaseEvent {
  event_type = 'Event With Array Types';
  plan = { 
    event_id: '5ded19cd-6015-441b-a2be-f954425be1fe',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties: EventWithArrayTypesProperties,
  ) {}
}

export class EventWithConstTypes implements BaseEvent {
  event_type = 'Event With Const Types';
  plan = { 
    event_id: '321b8f02-1bb3-4b33-8c21-8c55401d62da',
    event_version: '1.0.0',
  };
  event_properties = {
    'String Const WIth Quotes': "\"String \"Const With\" Quotes\"",
    'String Const': "String-Constant",
    'String Int Const': 0,
    'Integer Const': 10,
    'Boolean Const': true,
    'Number Const': 2.2,
  };
}

export class EventWithDifferentCasingTypes implements BaseEvent {
  event_type = 'event withDifferent_CasingTypes';
  plan = { 
    event_id: 'fcb3d82d-208f-4bc2-b8e1-843683d9b595',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties: EventWithDifferentCasingTypesProperties,
  ) {}
}

export class EventWithEnumTypes implements BaseEvent {
  event_type = 'Event With Enum Types';
  plan = { 
    event_id: 'b4fc8366-b05d-40d3-b698-79795701624b',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties: EventWithEnumTypesProperties,
  ) {}
}

export class EventWithOptionalArrayTypes implements BaseEvent {
  event_type = 'Event With Optional Array Types';
  plan = { 
    event_id: '2755da0e-a507-4b18-8f17-86d1d5c499ab',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties?: EventWithOptionalArrayTypesProperties,
  ) {}
}

export class EventWithOptionalProperties implements BaseEvent {
  event_type = 'Event With Optional Properties';
  plan = { 
    event_id: '00b99136-9d1a-48d8-89d5-25f165ff3ae0',
    event_version: '1.0.0',
  };

  constructor(
    public event_properties?: EventWithOptionalPropertiesProperties,
  ) {}
}


export class Ampli {
  private amplitude: NodeClient;

  constructor(amplitude: NodeClient) {
    this.amplitude = amplitude;
  }
  
  get client() {
    return this.amplitude;
  }

  identify(
    userId: string | undefined,
    deviceId: string | undefined,
    properties: IdentifyProperties,
    options?: IdentifyOptions,
    extra?: Extra
  ) {
    const amplitudeIdentify = new AmplitudeIdentify();
    for (const [key, value] of Object.entries({ ...properties })) {
      amplitudeIdentify.set(key, value);
    }
    this.amplitude.logEvent({ ...options, ...amplitudeIdentify.identifyUser(userId, deviceId) }, extra);
  }

  track(userId: string | undefined, event: Event, options?: EventOptions, extra?: Extra) {
    return this.amplitude.logEvent({ ...options, ...event,  user_id: userId }, extra);
  }

  flush() {
    return this.amplitude.flush();
  }

  // GENERATED EVENT FUNCTIONS
  /**
   * EventMaxIntForTest
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/EventMaxIntForTest
   *
   * Event to test schema validation
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. intMax10)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventMaxIntForTest(
    userId: string | undefined,
    properties: EventMaxIntForTestProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventMaxIntForTest(properties), options, extra);
  }

  /**
   * Event No Properties
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20No%20Properties
   *
   * Event w no properties description
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventNoProperties(
    userId: string | undefined,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventNoProperties(), options, extra);
  }

  /**
   * Event Object Types
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20Object%20Types
   *
   * Event with Object and Object Array
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. requiredObjectArray)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventObjectTypes(
    userId: string | undefined,
    properties: EventObjectTypesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventObjectTypes(properties), options, extra);
  }

  /**
   * Event With All Properties
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20All%20Properties
   *
   * Event w all properties description
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. requiredInteger)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithAllProperties(
    userId: string | undefined,
    properties: EventWithAllPropertiesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithAllProperties(properties), options, extra);
  }

  /**
   * Event With Array Types
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Array%20Types
   *
   * Description for event with Array Types
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. requiredObjectArray)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithArrayTypes(
    userId: string | undefined,
    properties: EventWithArrayTypesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithArrayTypes(properties), options, extra);
  }

  /**
   * Event With Const Types
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Const%20Types
   *
   * Description for event with const types
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithConstTypes(
    userId: string | undefined,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithConstTypes(), options, extra);
  }

  /**
   * event withDifferent_CasingTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/event%20withDifferent_CasingTypes
   *
   * Description for case with space
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. EnumPascalCase)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithDifferentCasingTypes(
    userId: string | undefined,
    properties: EventWithDifferentCasingTypesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithDifferentCasingTypes(properties), options, extra);
  }

  /**
   * Event With Enum Types
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Enum%20Types
   *
   * Description for event with enum types
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. optional enum)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithEnumTypes(
    userId: string | undefined,
    properties: EventWithEnumTypesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithEnumTypes(properties), options, extra);
  }

  /**
   * Event With Optional Array Types
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Array%20Types
   *
   * Description for event with optional array types
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. optionalJSONArray)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithOptionalArrayTypes(
    userId: string | undefined,
    properties?: EventWithOptionalArrayTypesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithOptionalArrayTypes(properties), options, extra);
  }

  /**
   * Event With Optional Properties
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Properties
   *
   * Event w optional properties description
   * 
   * Owner: Test codegen
   *
   * @param userId The user's ID.
   * @param properties The event's properties (e.g. optionalArrayNumber)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithOptionalProperties(
    userId: string | undefined,
    properties?: EventWithOptionalPropertiesProperties,
    options?: EventOptions,
    extra?: Extra,
  ) {
    return this.track(userId, new EventWithOptionalProperties(properties), options, extra);
  }
}

/**
 * Initializes and returns a Ampli instance
 * 
 * @param apiKeyOrNodeClient  A API key (string) or Amplitude NodeClient instance
 * @param options Amplitude NodeClient options
 * @return {Ampli}
 */
export function init(apiKeyOrNodeClient: string | NodeClient, options: Partial<Options> = DefaultOptions) {
  const apiKey = typeof(apiKeyOrNodeClient) === 'string' ? apiKeyOrNodeClient : undefined;
  const nodeClient = typeof(apiKeyOrNodeClient) === 'object' ? apiKeyOrNodeClient : initNodeClient(apiKey, options);
  return new Ampli(nodeClient);
}

const DEFAULT_INSTANCE: string = Environment.development;
const _instances: { [name: string]: Ampli } = {};

/**
 * Get an Ampli instance
 * 
 * @param instance The Environment or name of the desired instance 
 */ 
export function getInstance(instance: Environment | string = DEFAULT_INSTANCE): Ampli {
  let ampli = _instances[instance];
  if (!ampli) {
    const apiKey = ApiKey[instance];
    if (apiKey === undefined || apiKey === '') {
      throw new Error(`No API key or instance found for '${instance}'. Provide a valid environment or call Ampli.setInstance('${instance}', ...) before making this call.`);
    }
    ampli = init(apiKey, DefaultOptions);
    setInstance(ampli, instance);
  }
  return ampli;
}

/**
 * Stores and instance of Ampli for later retrieval via getInstance()
 * 
 * @param ampli     The Ampli instance 
 * @param instance  The Environment or name of this instance
 */
export function setInstance(ampli: Ampli, instance: Environment | string = DEFAULT_INSTANCE) {
  _instances[instance] = ampli;
}
