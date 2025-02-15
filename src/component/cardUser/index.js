import React, { useState, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../color';

// Habilita LayoutAnimation no Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CardUser({ name, email, password }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const eyeRotateAnim = useRef(new Animated.Value(0)).current;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    Animated.sequence([
      Animated.timing(eyeRotateAnim, {
        toValue: isPasswordVisible ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
    
    Animated.parallel([
      Animated.spring(heightAnim, {
        toValue: isExpanded ? 0 : 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(rotateAnim, {
        toValue: isExpanded ? 0 : 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateIcon = eyeRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const rotateChevron = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const translateY = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0]
  });

  const opacity = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  return (
    <Animated.View style={[styles.container]}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {name?.charAt(0).toUpperCase() || '?'}
          </Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Animated.View style={[styles.chevronContainer, { transform: [{ rotate: rotateChevron }] }]}>
          <Feather 
            name="chevron-down" 
            size={24} 
            color={colors.textSecondary} 
          />
        </Animated.View>
      </TouchableOpacity>

      {isExpanded && (
        <Animated.View 
          style={[
            styles.detailsContainer,
            {
              opacity,
              transform: [{ translateY }]
            }
          ]}
        >
          <View style={styles.divider} />
          
          <View style={styles.detailRow}>
            <View style={styles.labelContainer}>
              <Feather name="mail" size={16} color={colors.textSecondary} />
              <Text style={styles.label}>Email</Text>
            </View>
            <Text style={styles.detailText}>{email}</Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.labelContainer}>
              <Feather name="lock" size={16} color={colors.textSecondary} />
              <Text style={styles.label}>Senha</Text>
            </View>
            <View style={styles.passwordContainer}>
              <Animated.Text style={[styles.detailText, { opacity: heightAnim }]}>
                {isPasswordVisible ? password : '••••••••'}
              </Animated.Text>
              <TouchableOpacity 
                onPress={togglePasswordVisibility} 
                style={styles.buttonPassword}
              >
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  <Feather 
                    name={isPasswordVisible ? 'eye-off' : 'eye'} 
                    size={18} 
                    color={colors.primary} 
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
} 
