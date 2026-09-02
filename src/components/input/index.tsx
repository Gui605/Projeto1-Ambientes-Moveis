import React, { forwardRef, Fragment } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TextInputProps, 
    TouchableOpacity 
} from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { style } from "./styles";

type IconComponent = 
    | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
    | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
    | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent;
    IconRight?: IconComponent;
    iconLeftName?: string;
    iconRightName?: string;
    title?: string;
    onIconLeftPress?: () => void;
    onIconRightPress?: () => void;
};

export const Input = forwardRef<TextInput, Props>((props, ref) => {
    const { 
        IconLeft, 
        IconRight, 
        iconLeftName, 
        iconRightName, 
        title, 
        onIconLeftPress, 
        onIconRightPress, 
        ...rest 
    } = props;

    return (
        <Fragment>
            <View style={style.container}>
                {title && (
                    <View style={style.titleContainer}>
                        <Text style={style.titleText}>{title}</Text>
                    </View>
                )}

                <View style={style.boxInput}>
                    {IconLeft && iconLeftName && (
                        <TouchableOpacity 
                            onPress={onIconLeftPress} 
                            disabled={!onIconLeftPress}
                        >
                            <IconLeft 
                                name={iconLeftName as any} 
                                size={22} 
                                color={themas.Colors.gray} 
                                style={style.iconLeft}
                            />
                        </TouchableOpacity>
                    )}

                    <TextInput 
                        ref={ref}
                        style={style.input} 
                        placeholderTextColor={themas.Colors.gray}
                        {...rest} 
                    />

                    {IconRight && iconRightName && (
                        <TouchableOpacity 
                            onPress={onIconRightPress} 
                            disabled={!onIconRightPress}
                        >
                            <IconRight 
                                name={iconRightName as any} 
                                size={20} 
                                color={themas.Colors.gray} 
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Fragment>
    );
});