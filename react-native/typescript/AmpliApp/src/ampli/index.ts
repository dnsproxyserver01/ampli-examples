/* tslint:disable */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull react-native-typescript-ampli'
 *
 * Required dependencies: @amplitude/react-native
 * Tracking Plan Version: 0
 * Build: 1.0.0
 * Runtime: react-native:typescript-ampli
 *
 * [View Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/test-codegen/Test%20Codegen/implementation/react-native-typescript-ampli)
 */

import {
  Amplitude,
  Identify as AmplitudeIdentify,
  BaseEvent as Event,
  MiddlewareExtra,
} from '@amplitude/react-native';

export type EventOptions = {
  userId?: string;
  deviceId?: string;
}

export type Environment = 'development' | 'production';

export const ApiKey: Record<Environment, string> = {
  development: '',
  production: ''
};

export interface LoadOptions {
  environment?: Environment;
  disabled?: boolean;
  client?: {
    apiKey?: string;
    instance?: Amplitude;
  }
}

export interface IdentifyProperties {
  /**
   * Description for identify optionalArray
   *
   * | Rule | Value |
   * |---|---|
   * | Unique Items | false |
   * | Item Type | string |
   */
  optionalArray?: string[];
  /**
   * Description for identify requiredNumber
   *
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  requiredNumber: number;
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

export interface EventMaxIntForTestProperties {
  /**
   * property to test schema validation
   *
   * | Rule | Value |
   * |---|---|
   * | Type | integer |
   * | Max Value | 10 |
   */
  intMax10: number;
}

export interface EventObjectTypesProperties {
  /**
   * Property Object Type
   */
  requiredObject: {
    [k: string]: any;
  };
  /**
   * Property Object Array Type
   */
  requiredObjectArray: any[];
}

export interface EventWithAllPropertiesProperties {
  /**
   * Event 2 Property - Optional String    *     * Examples:    * Some string, or another
   */
  optionalString?: string;
  /**
   * Event 2 Property - Array
   *
   * | Rule | Value |
   * |---|---|
   * | Min Items | 0 |
   * | Item Type | string |
   */
  requiredArray: string[];
  /**
   * Event 2 Property - Boolean
   */
  requiredBoolean: boolean;
  /**
   * Event 2 Property - Enum
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | Enum1, Enum2 |
   */
  requiredEnum: "Enum1" | "Enum2";
  /**
   * Event 2 Property - Integer    *     * Examples:    * 5, 4, 3
   *
   * | Rule | Value |
   * |---|---|
   * | Type | integer |
   */
  requiredInteger: number;
  /**
   * Event 2 Property - Number
   *
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  requiredNumber: number;
  /**
   * Event 2 Property - String
   */
  requiredString: string;
}

export interface EventWithArrayTypesProperties {
  /**
   * description for required boolean array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | boolean |
   */
  requiredBooleanArray: boolean[];
  /**
   * Description for required number array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | number |
   */
  requiredNumberArray: number[];
  /**
   * Description for required object array
   */
  requiredObjectArray: any[];
  /**
   * description for required string array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | string |
   */
  requiredStringArray: string[];
}

export interface EventWithDifferentCasingTypesProperties {
  /**
   * descriptionForEnumCamelCase
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | enumCamelCase |
   */
  enumCamelCase: "enumCamelCase";
  /**
   * DescirptionForEnumPascalCase
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | EnumPascalCase |
   */
  EnumPascalCase: "EnumPascalCase";
  /**
   * description_for_enum_snake_case
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | enum_snake_case |
   */
  enum_snake_case: "enum_snake_case";
  /**
   * Description for enum with space
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | enum with space |
   */
  "enum with space": "enum with space";
  /**
   * descriptionForCamelCase
   */
  propertyWithCamelCase: string;
  /**
   * DescriptionForPascalCase
   */
  PropertyWithPascalCase: string;
  /**
   * Description_for_snake_case
   */
  property_with_snake_case: string;
  /**
   * Description for case with space
   */
  "property with space": string;
}

export interface EventWithEnumTypesProperties {
  /**
   * Description for required enum
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | optional enum 1, optional enum 2 |
   */
  "optional enum"?: "optional enum 1" | "optional enum 2";
  /**
   * Description for optional enum
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | required enum 1, required enum 2 |
   */
  "required enum": "required enum 1" | "required enum 2";
}

export interface EventWithOptionalArrayTypesProperties {
  /**
   * Description for optional boolean array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | boolean |
   */
  optionalBooleanArray?: boolean[];
  /**
   * Description for optional object array
   */
  optionalJSONArray?: any[];
  /**
   * Description for optional number array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | number |
   */
  optionalNumberArray?: number[];
  /**
   * Description for optional string array
   *
   * | Rule | Value |
   * |---|---|
   * | Item Type | string |
   */
  optionalStringArray?: string[];
}

export interface EventWithOptionalPropertiesProperties {
  /**
   * | Rule | Value |
   * |---|---|
   * | Item Type | number |
   */
  optionalArrayNumber?: number[];
  /**
   * | Rule | Value |
   * |---|---|
   * | Item Type | string |
   */
  optionalArrayString?: string[];
  optionalBoolean?: boolean;
  /**
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  optionalNumber?: number;
  /**
   * Optional String property description
   */
  optionalString?: string;
}

export interface EventWithTemplatePropertiesProperties {
  /**
   * optional_event_property description
   *
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  optional_event_property?: number;
  /**
   * optional_template_property description
   *
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  optional_template_property?: number;
  /**
   * required_event_property description
   */
  required_event_property: string;
  /**
   * required_template_property description
   */
  required_template_property: string;
}

export interface EventTemplateProperties {
  /**
   * optional_template_property description
   *
   * | Rule | Value |
   * |---|---|
   * | Type | number |
   */
  optional_template_property?: number;
  /**
   * required_template_property description
   */
  required_template_property: string;
}

export interface SourceTemplateProperties {
  /**
   * description for context optionalEnum
   *
   * | Rule | Value |
   * |---|---|
   * | Enum Values | Value 1, Value 2 |
   */
  optionalEnum?: "Value 1" | "Value 2";
  /**
   * description for context requiredString
   */
  requiredString: string;
}

export class Identify implements Event {
  eventType = 'Identify';

  constructor(
    public eventProperties: IdentifyProperties,
  ) {}
}

export class Group implements Event {
  eventType = 'Group';

  constructor(
    public eventProperties: GroupProperties,
  ) {}
}

export class EventMaxIntForTest implements Event {
  eventType = 'EventMaxIntForTest';

  constructor(
    public eventProperties: EventMaxIntForTestProperties,
  ) {}
}

export class EventNoProperties implements Event {
  eventType = 'Event No Properties';
}

export class EventObjectTypes implements Event {
  eventType = 'Event Object Types';

  constructor(
    public eventProperties: EventObjectTypesProperties,
  ) {}
}

export class EventWithAllProperties implements Event {
  eventType = 'Event With All Properties';
  eventProperties: EventWithAllPropertiesProperties & {
    'requiredConst': "some-const-value";
  };

  constructor(
    eventProperties: EventWithAllPropertiesProperties,
  ) {
    this.eventProperties = {
      ...eventProperties,
      'requiredConst': "some-const-value",
    };
  }
}

export class EventWithArrayTypes implements Event {
  eventType = 'Event With Array Types';

  constructor(
    public eventProperties: EventWithArrayTypesProperties,
  ) {}
}

export class EventWithConstTypes implements Event {
  eventType = 'Event With Const Types';
  eventProperties = {
    'Boolean Const': true,
    'Integer Const': 10,
    'Number Const': 2.2,
    'String Const': "String-Constant",
    'String Const WIth Quotes': "\"String \"Const With\" Quotes\"",
    'String Int Const': 0,
  };
}

export class EventWithDifferentCasingTypes implements Event {
  eventType = 'event withDifferent_CasingTypes';

  constructor(
    public eventProperties: EventWithDifferentCasingTypesProperties,
  ) {}
}

export class EventWithEnumTypes implements Event {
  eventType = 'Event With Enum Types';

  constructor(
    public eventProperties: EventWithEnumTypesProperties,
  ) {}
}

export class EventWithOptionalArrayTypes implements Event {
  eventType = 'Event With Optional Array Types';

  constructor(
    public eventProperties?: EventWithOptionalArrayTypesProperties,
  ) {}
}

export class EventWithOptionalProperties implements Event {
  eventType = 'Event With Optional Properties';

  constructor(
    public eventProperties?: EventWithOptionalPropertiesProperties,
  ) {}
}

export class EventWithTemplateProperties implements Event {
  eventType = 'Event With Template Properties';

  constructor(
    public eventProperties: EventWithTemplatePropertiesProperties,
  ) {}
}

const getPromiseResponse = (result: boolean) => Promise.resolve(result);

// prettier-ignore
export class Ampli {
  private disabled: boolean = false;
  private amplitude?: Amplitude;

  get client(): Amplitude {
    this.isInitializedAndEnabled();
    return this.amplitude!;
  }

  private isInitializedAndEnabled(): boolean {
    if (!this.amplitude) {
      throw new Error('Ampli is not yet initialized. Have you called ampli.load() on app start?');
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   * @param options Configuration options to initialize the Ampli SDK with.
   */
  load(options?: LoadOptions) {
    this.disabled = options?.disabled ?? false;

    if (this.amplitude) {
      console.warn('WARNING: Ampli is already intialized. Ampli.load() should be called once at application startup.');
      return { promise: getPromiseResponse(false) };
    }

    const env = options?.environment ?? 'development';
    const apiKey = options?.client?.apiKey ?? ApiKey[env];

    if (options?.client?.instance) {
      this.amplitude = options?.client?.instance;
      return { promise: getPromiseResponse(true) };
    }

    if (apiKey) {
      this.amplitude = Amplitude.getInstance();
      const promise = this.amplitude!.init(apiKey);
      return { promise };
    }

    throw new Error("ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
  }

  /**
   * Identify a user and set user properties.
   *
   * @param userId The user's id.
   * @param properties The user properties.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  identify(
    userId: string | undefined,
    properties: IdentifyProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra
  ) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options, userId);

    const amplitudeIdentify = new AmplitudeIdentify();
    if (properties != null) {
      for (const [key, value] of Object.entries(properties)) {
        amplitudeIdentify.set(key, value);
      }
    }

    const promise = this.amplitude!.identify(amplitudeIdentify, extra);
    return { promise };
  }

  setGroup(groupType: string, groupName: string | string[], options?: EventOptions, extra?: MiddlewareExtra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const promise = this.amplitude!.setGroup(groupType, groupName);
    return { promise };
  }

  /**
   * Identify a group and set group properties.
   *
   * @param groupType The group type.
   * @param groupName The group name.
   * @param properties The group properties.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  groupIdentify(
    groupType: string,
    groupName: string | string[],
    properties: GroupProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const amplitudeIdentify = new AmplitudeIdentify();
    if (properties != null) {
      for (const [key, value] of Object.entries(properties)) {
        amplitudeIdentify.set(key, value);
      }
    }

    const promise = this.amplitude!.groupIdentify(groupType, groupName, amplitudeIdentify, extra);
    return { promise };
  }

  /**
   * Track event
   *
   * @param event The event to track.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  track(event: Event, options?: EventOptions, extra?: MiddlewareExtra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const promise = this.amplitude!.logEvent(event.eventType, event.eventProperties, extra);
    return { promise };
  }

  flush() {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    const promise = this.amplitude!.uploadEvents();
    return { promise };
  }

  /**
   * EventMaxIntForTest
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/EventMaxIntForTest)
   *
   * Event to test schema validation
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. intMax10)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventMaxIntForTest(
    properties: EventMaxIntForTestProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventMaxIntForTest(properties), options, extra);
  }

  /**
   * Event No Properties
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20No%20Properties)
   *
   * Event w no properties description
   *
   * Owner: Test codegen
   *
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventNoProperties(
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventNoProperties(), options, extra);
  }

  /**
   * Event Object Types
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20Object%20Types)
   *
   * Event with Object and Object Array
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. requiredObject)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventObjectTypes(
    properties: EventObjectTypesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventObjectTypes(properties), options, extra);
  }

  /**
   * Event With All Properties
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20All%20Properties)
   *
   * Event w all properties description
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. optionalString)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithAllProperties(
    properties: EventWithAllPropertiesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithAllProperties(properties), options, extra);
  }

  /**
   * Event With Array Types
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Array%20Types)
   *
   * Description for event with Array Types
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. requiredBooleanArray)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithArrayTypes(
    properties: EventWithArrayTypesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithArrayTypes(properties), options, extra);
  }

  /**
   * Event With Const Types
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Const%20Types)
   *
   * Description for event with const types
   *
   * Owner: Test codegen
   *
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithConstTypes(
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithConstTypes(), options, extra);
  }

  /**
   * event withDifferent_CasingTypes
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/event%20withDifferent_CasingTypes)
   *
   * Description for case with space
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. enumCamelCase)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithDifferentCasingTypes(
    properties: EventWithDifferentCasingTypesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithDifferentCasingTypes(properties), options, extra);
  }

  /**
   * Event With Enum Types
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Enum%20Types)
   *
   * Description for event with enum types
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. optional enum)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithEnumTypes(
    properties: EventWithEnumTypesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithEnumTypes(properties), options, extra);
  }

  /**
   * Event With Optional Array Types
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Array%20Types)
   *
   * Description for event with optional array types
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. optionalBooleanArray)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithOptionalArrayTypes(
    properties?: EventWithOptionalArrayTypesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithOptionalArrayTypes(properties), options, extra);
  }

  /**
   * Event With Optional Properties
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Properties)
   *
   * Event w optional properties description
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. optionalArrayNumber)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithOptionalProperties(
    properties?: EventWithOptionalPropertiesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithOptionalProperties(properties), options, extra);
  }

  /**
   * Event With Template Properties
   *
   * [View in Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Template%20Properties)
   *
   * Event with template properties description
   *
   * Owner: Test codegen
   *
   * @param properties The event's properties (e.g. optional_event_property)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  eventWithTemplateProperties(
    properties: EventWithTemplatePropertiesProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new EventWithTemplateProperties(properties), options, extra);
  }

  private handleEventOptions(options: EventOptions | undefined, userId?: string) {
    if (userId || options?.userId) {
      this.amplitude?.setUserId(userId ?? options?.userId ?? null);
    }

    if (options?.deviceId) {
      this.amplitude?.setDeviceId(options.deviceId);
    }
  }
}

export const ampli = new Ampli();
