import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../color';
import { CustomTabBar } from '../components/CustomTabBar';

import Tool from '../pages/tool';
import User from '../pages/user';

const Tab = createBottomTabNavigator();

export default function TabRoutes({ route }) {
  const { role } = route.params;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Peças"
        component={Tool}
        initialParams={{ role }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="tool" 
              size={size} 
              color={color}
            />
          ),
        }}
      />

      {role === 'admin' && (
        <Tab.Screen
          name="Usuários"
          component={User}
          initialParams={{ role }}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather 
                name="users" 
                size={size} 
                color={color}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
} 