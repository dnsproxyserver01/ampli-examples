
const { Identify: AmplitudeIdentify } = require('@amplitude/identify');
const { init: initNodeClient, NodeClient } = require('@amplitude/node');

/**
 * @typedef {Object} EventOptions
 */

/**
 * @typedef {Object} IdentifyOptions
 */

/**
 * @typedef {Object} GroupOptions
 */
 
/**
 * @typedef {Object} Extra
 */

/**
 * @typedef Environment
 * @readonly
 * @type {object}
 * @property {string} development
 * @property {string} production
 */
const Environment = {
  development: 'development',
  production: 'production'
}

/**
 * @typedef ApiKey
 * @type {object}
 * @property {string} development
 * @property {string} production
 */
const ApiKey = {
  development: '',
  production: ''
};

/**
 * Default NodeClient Options. Contains tracking plan information.
 */
const DefaultOptions = {
  plan: {
    version: '0',
    branch: 'main',
    source: 'node-js-ampli'
  }
};

class EventMaxIntForTest {
  constructor(properties) {
    this.event_type = 'EventMaxIntForTest';
    this.plan = {
      event_id: 'aa0f08ac-8928-4569-a524-c1699e7da6f4',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventNoProperties {
  constructor() {
    this.event_type = 'Event No Properties';
    this.plan = {
      event_id: '26af925a-be3a-40e5-947d-33da66a5352f',
      event_version: '1.0.0'
    }
  }
}

class EventObjectTypes {
  constructor(properties) {
    this.event_type = 'Event Object Types';
    this.plan = {
      event_id: 'aea72ecc-5a10-4bd7-99a6-81a464aabaed',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventWithAllProperties {
  constructor(properties) {
    this.event_type = 'Event With All Properties';
    this.plan = {
      event_id: '311ba144-8532-4474-a9bd-8b430625e29a',
      event_version: '1.0.0'
    }
    this.event_properties = {
      ...properties,
      'requiredConst': "some-const-value",
    };
  }
}

class EventWithArrayTypes {
  constructor(properties) {
    this.event_type = 'Event With Array Types';
    this.plan = {
      event_id: '5ded19cd-6015-441b-a2be-f954425be1fe',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventWithConstTypes {
  constructor() {
    this.event_type = 'Event With Const Types';
    this.plan = {
      event_id: '321b8f02-1bb3-4b33-8c21-8c55401d62da',
      event_version: '1.0.0'
    }
    this.event_properties = {
      'String Const WIth Quotes': "\"String \"Const With\" Quotes\"",
      'String Const': "String-Constant",
      'String Int Const': 0,
      'Integer Const': 10,
      'Boolean Const': true,
      'Number Const': 2.2,
    };
  }
}

class EventWithDifferentCasingTypes {
  constructor(properties) {
    this.event_type = 'event withDifferent_CasingTypes';
    this.plan = {
      event_id: 'fcb3d82d-208f-4bc2-b8e1-843683d9b595',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventWithEnumTypes {
  constructor(properties) {
    this.event_type = 'Event With Enum Types';
    this.plan = {
      event_id: 'b4fc8366-b05d-40d3-b698-79795701624b',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventWithOptionalArrayTypes {
  constructor(properties) {
    this.event_type = 'Event With Optional Array Types';
    this.plan = {
      event_id: '2755da0e-a507-4b18-8f17-86d1d5c499ab',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

class EventWithOptionalProperties {
  constructor(properties) {
    this.event_type = 'Event With Optional Properties';
    this.plan = {
      event_id: '00b99136-9d1a-48d8-89d5-25f165ff3ae0',
      event_version: '1.0.0'
    }
    this.event_properties = properties;
  }
}

// prettier-ignore
class Ampli {
  constructor(amplitude) {
    this.amplitude = amplitude;
  }
  
  get client() {
    return this.amplitude;
  }

  /**
   * Identify a user and set or update that user's properties.
   * @param {string|undefined} userId The user's ID.
   * @param {string|undefined} deviceId The device ID.
   * @param {Object} properties The user's properties.
   * @param {string[]} [properties.optionalArray] Description for identify optionalArray
   * @param {number} properties.requiredNumber Description for identify requiredNumber
   * @param {IdentifyOptions} [options] Options for this identify call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  identify(userId, deviceId, properties, options, extra) {
    const amplitudeIdentify = new AmplitudeIdentify();
    for (const [key, value] of Object.entries({ ...properties })) {
      amplitudeIdentify.set(key, value);
    }

    this.amplitude.logEvent({ ...options, ...amplitudeIdentify.identifyUser(userId, deviceId) }, extra);
  }

  /**
   * EventMaxIntForTest
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/EventMaxIntForTest
   * Event to test schema validation
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {number} properties.intMax10 property to test schema validation
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventMaxIntForTest(userId, properties, options, extra) {
    this.track(userId, new EventMaxIntForTest(properties), options, extra);
  }

  /**
   * EventNoProperties
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20No%20Properties
   * Event w no properties description
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventNoProperties(userId, options, extra) {
    this.track(userId, new EventNoProperties(), options, extra);
  }

  /**
   * EventObjectTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20Object%20Types
   * Event with Object and Object Array
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {Object[]} properties.requiredObjectArray Property Object Array Type
   * @param {Object} properties.requiredObject Property Object Type
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventObjectTypes(userId, properties, options, extra) {
    this.track(userId, new EventObjectTypes(properties), options, extra);
  }

  /**
   * EventWithAllProperties
   * https://data.staging.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20All%20Properties
   * Event w all properties description
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {number} properties.requiredInteger Event 2 Property - Integer    *     * Examples:    * 5, 4, 3
   * @param {string} [properties.optionalString] Event 2 Property - Optional String    *     * Examples:    * Some string, or another
   * @param {string} properties.requiredEnum Event 2 Property - Enum
   * @param {string[]} properties.requiredArray Event 2 Property - Array
   * @param {boolean} properties.requiredBoolean Event 2 Property - Boolean
   * @param {number} properties.requiredNumber Event 2 Property - Number
   * @param {string} properties.requiredString Event 2 Property - String
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithAllProperties(userId, properties, options, extra) {
    this.track(userId, new EventWithAllProperties(properties), options, extra);
  }

  /**
   * EventWithArrayTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Array%20Types
   * Description for event with Array Types
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {Object[]} properties.requiredObjectArray Description for required object array
   * @param {string[]} properties.requiredStringArray description for required string array
   * @param {number[]} properties.requiredNumberArray Description for required number array
   * @param {boolean[]} properties.requiredBooleanArray description for required boolean array
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithArrayTypes(userId, properties, options, extra) {
    this.track(userId, new EventWithArrayTypes(properties), options, extra);
  }

  /**
   * EventWithConstTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Const%20Types
   * Description for event with const types
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithConstTypes(userId, options, extra) {
    this.track(userId, new EventWithConstTypes(), options, extra);
  }

  /**
   * EventWithDifferent_CasingTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/event%20withDifferent_CasingTypes
   * Description for case with space
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.EnumPascalCase DescirptionForEnumPascalCase
   * @param {string} properties.enum_snake_case description_for_enum_snake_case
   * @param {string} properties.enum with space Description for enum with space
   * @param {string} properties.PropertyWithPascalCase DescriptionForPascalCase
   * @param {string} properties.enumCamelCase descriptionForEnumCamelCase
   * @param {string} properties.propertyWithCamelCase descriptionForCamelCase
   * @param {string} properties.property_with_snake_case Description_for_snake_case
   * @param {string} properties.property with space Description for case with space
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithDifferentCasingTypes(userId, properties, options, extra) {
    this.track(userId, new EventWithDifferentCasingTypes(properties), options, extra);
  }

  /**
   * EventWithEnumTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Enum%20Types
   * Description for event with enum types
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} [properties.optional enum] Description for required enum
   * @param {string} properties.required enum Description for optional enum
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithEnumTypes(userId, properties, options, extra) {
    this.track(userId, new EventWithEnumTypes(properties), options, extra);
  }

  /**
   * EventWithOptionalArrayTypes
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Array%20Types
   * Description for event with optional array types
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} [properties] The event's properties.
   * @param {Object[]} [properties.optionalJSONArray] Description for optional object array
   * @param {string[]} [properties.optionalStringArray] Description for optional string array
   * @param {number[]} [properties.optionalNumberArray] Description for optional number array
   * @param {boolean[]} [properties.optionalBooleanArray] Description for optional boolean array
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithOptionalArrayTypes(userId, properties, options, extra) {
    this.track(userId, new EventWithOptionalArrayTypes(properties), options, extra);
  }

  /**
   * EventWithOptionalProperties
   * https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/0.0.0/Event%20With%20Optional%20Properties
   * Event w optional properties description
   * 
   * Owner: Test codegen
   * @param {string} userId The user's ID.
   * @param {Object} [properties] The event's properties.
   * @param {number[]} [properties.optionalArrayNumber] Property has no description in tracking plan.
   * @param {string[]} [properties.optionalArrayString] Property has no description in tracking plan.
   * @param {number} [properties.optionalNumber] Property has no description in tracking plan.
   * @param {boolean} [properties.optionalBoolean] Property has no description in tracking plan.
   * @param {string} [properties.optionalString] Optional String property description
   * @param {EventOptions} [options] Options for this track call.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  eventWithOptionalProperties(userId, properties, options, extra) {
    this.track(userId, new EventWithOptionalProperties(properties), options, extra);
  }

  /**
   * Track any event.
   * @param {string} userId The user's ID.
   * @param {Object} event The event.
   * @param {string} event.event_type The event's name.
   * @param {string} [event.event_properties] The event's properties.
   * @param {Object} [event.plan] The event's plan information.
   * @param {string} [event.plan.event_id] The event's uuid in the tracking plan. Set automatically by Ampli.
   * @param {string} [event.plan.event_version] The event's version in the tracking plan. Set automatically by Ampli.
   * @param {EventOptions} [options] Amplitude event options.
   * @param {Extra} [extra] Extra untyped parameters for use in middleware.
   */
  track(userId, event, options, extra) {
    return this.amplitude.logEvent({ ...options, ...event,  user_id: userId }, extra);
  }

  flush() {
    return this.amplitude.flush();
  }
}

/**
 * Initializes and returns a Ampli instance
 *
 * @param {(string|NodeClient)} apiKeyOrNodeClient  A API key (string) or Amplitude NodeClient instance
 * @param {Partial<Options>} options Amplitude NodeClient options
 * @return {Ampli}
 */
function init(apiKeyOrNodeClient, options = DefaultOptions) {
  const apiKey = typeof(apiKeyOrNodeClient) === 'string' ? apiKeyOrNodeClient : undefined;
  const nodeClient = typeof(apiKeyOrNodeClient) === 'object' ? apiKeyOrNodeClient : initNodeClient(apiKey, options);
  return new Ampli(nodeClient);
}

const DefaultInstance = Environment.development;
/**
* @type {Object.<string, {Ampli}> }
* @private
*/
const _instances = {};

/**
 * Get an Ampli instance
 *
 * @param {(Environment|string)} [instance] The Environment or name of the desired instance
 *
 * @return {Ampli}
 */
function getInstance(instance = DefaultInstance) {
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
 * @param {Ampli} ampli The Ampli instance
 * @param {(Environment.production|Environment.development|string)} instance  The Environment or name of this instance
 */
function setInstance(ampli, instance = DefaultInstance) {
  _instances[instance] = ampli;
}

module.exports.Ampli = Ampli;
module.exports.Environment = Environment;
module.exports.DefaultOptions = DefaultOptions;
module.exports.init = init;
module.exports.getInstance = getInstance;
module.exports.setInstance = setInstance;
module.exports.EventMaxIntForTest = EventMaxIntForTest;
module.exports.EventNoProperties = EventNoProperties;
module.exports.EventObjectTypes = EventObjectTypes;
module.exports.EventWithAllProperties = EventWithAllProperties;
module.exports.EventWithArrayTypes = EventWithArrayTypes;
module.exports.EventWithConstTypes = EventWithConstTypes;
module.exports.EventWithDifferentCasingTypes = EventWithDifferentCasingTypes;
module.exports.EventWithEnumTypes = EventWithEnumTypes;
module.exports.EventWithOptionalArrayTypes = EventWithOptionalArrayTypes;
module.exports.EventWithOptionalProperties = EventWithOptionalProperties;
