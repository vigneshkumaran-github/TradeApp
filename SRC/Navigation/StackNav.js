import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/WelcomeScreens/Splash";
import Onboard from "../Screens/OnboardScreens/Onboard";
import Onboard2 from "../Screens/OnboardScreens/Onboard2";
import Signin from "../Screens/AuthScreens/Signin";
import { colors } from "../Constants/DesignConstants";
import Signup from "../Screens/AuthScreens/Signup";
import SecureAccount from "../Screens/VerficationScreens/SecureAccount";
import MobileVerification from "../Screens/VerficationScreens/MobileVerification";
import OtpVerify from "../Screens/VerficationScreens/OtpVerify";
import ScanFace from "../Screens/VerficationScreens/ScanFace";
import ScanFingerprint from "../Screens/VerficationScreens/ScanFingerprint";
import PinSetup from "../Screens/VerficationScreens/PinSetup";
import PasswordRecoverPhone from "../Screens/PasswordRecovery/PasswordRecoverPhone";
import PasswordRecoverEmail from "../Screens/PasswordRecovery/PasswordRecoverEmail";
import PasswordRecoverOtp from "../Screens/PasswordRecovery/PasswordRecoverOtp";


const StackConfig = {headerShown: false,statusBarColor:colors.backgroundcolor,statusBarStyle:'dark'};
const AuthStack = createNativeStackNavigator();

export function AuthStackScreen() {
    return (
      <AuthStack.Navigator screenOptions={StackConfig} initialRouteName="Onboard">
        <AuthStack.Screen name="Onboard" component={Onboard} />
        <AuthStack.Screen name="Onboard2" component={Onboard2} />
        <AuthStack.Screen name="Signin" component={Signin} />
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen name="SecureAccount" component={SecureAccount} />
        <AuthStack.Screen name="MobileVerification" component={MobileVerification} />
        <AuthStack.Screen name="OtpVerify" component={OtpVerify} />
        <AuthStack.Screen name="ScanFace" component={ScanFace} />
        <AuthStack.Screen name="ScanFingerprint" component={ScanFingerprint} />
        <AuthStack.Screen name="PinSetup" component={PinSetup} />
        <AuthStack.Screen name="PasswordRecoverPhone" component={PasswordRecoverPhone} />
        <AuthStack.Screen name="PasswordRecoverEmail" component={PasswordRecoverEmail} />
        <AuthStack.Screen name="PasswordRecoverOtp" component={PasswordRecoverOtp} />
      </AuthStack.Navigator>
    );
  } 