//
// Ampli - A strong typed wrapper for your Analytics
//
// This file is generated by Amplitude.
// To update run 'ampli pull java-ampli'
//
// Required dependencies: com.amplitude:android-sdk:2.34.1, com.squareup.okhttp3:okhttp:4.2.2
// Tracking Plan Version: 0
// Build: 1.0.0
//
// [View Tracking Plan](https://data.amplitude.com/test-codegen/Test%20Codegen/events/main/latest)
//
// [Full Setup Instructions](https://data.amplitude.com/test-codegen/Test%20Codegen/implementation/java-ampli)
//
package com.amplitude.ampli;

import java.io.IOException;

/**
 * description_for_enum_snake_case
 */
public enum EventWithDifferentCasingTypesEnumSnakeCase {
    ENUM_SNAKE_CASE;

    public String toValue() {
        switch (this) {
            case ENUM_SNAKE_CASE: return "enum_snake_case";
        }
        return null;
    }

    public static EventWithDifferentCasingTypesEnumSnakeCase forValue(String value) throws IOException {
        if (value.equals("enum_snake_case")) return ENUM_SNAKE_CASE;
        throw new IOException("Cannot deserialize EventWithDifferentCasingTypesEnumSnakeCase");
    }
}