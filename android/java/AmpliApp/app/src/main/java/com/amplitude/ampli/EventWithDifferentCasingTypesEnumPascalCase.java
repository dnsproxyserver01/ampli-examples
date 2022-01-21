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
 * DescirptionForEnumPascalCase
 */
public enum EventWithDifferentCasingTypesEnumPascalCase {
    ENUM_PASCAL_CASE;

    public String toValue() {
        switch (this) {
            case ENUM_PASCAL_CASE: return "EnumPascalCase";
        }
        return null;
    }

    public static EventWithDifferentCasingTypesEnumPascalCase forValue(String value) throws IOException {
        if (value.equals("EnumPascalCase")) return ENUM_PASCAL_CASE;
        throw new IOException("Cannot deserialize EventWithDifferentCasingTypesEnumPascalCase");
    }
}