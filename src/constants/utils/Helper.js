import { CommonActions } from '@react-navigation/native';
import { Alert, Linking, Text, Image } from 'react-native';
import Toast from 'react-native-toast-message'
import moment from 'moment'
import { theme } from './theme';
import { View } from 'react-native';
import React, { Component, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchIcon } from '../assets/svg_components';
import BackButton from '../components/BackButton';
import { config } from '.';
import { useTranslation } from 'react-i18next';

export default class Helper {

    isEmptyString(str) {
        return (str == "" || !str)
    }

    isEmptyArray(arr) {
        return (!arr || arr.length == 0)
    }

    isValidEmail(num) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(num);
    }

    isValidIntNum(num) {
        var re = num.replace(/[-A-Za-z :'":!()?"@$=€&|~•^βαπ©¥%%¢¥`®™¤Δž¤£√_&#*+;,.<>\{\}\[\]\\\/]/gi, '')
        return re
    }

    isValidNonZeroDecimalNumber(num) {
        var re = num.replace(/^[1-9]\d*$/gi, '')
        return re
    }

    isValidPositiveNumber(num) {
        var re = num.replace(/[-A-Za-z :'":!()?"@$=€&|~•^βαπ©¥%%¢¥`®™¤Δž¤£√_&#*+;,<>\{\}\[\]\\\/]/gi, '')
        return re
    }

    isSpecialCharacterFreeText(num) {
        var re = num.replace(/[-:'":!()?"$=€&|~•^βαπ©¥%%¢¥`®™¤Δž¤£√_&#*+;,<>\{\}\[\]\\\/]/gi, '')
        return re
    }

    showErrorToast(title, msg) {
        Toast.show({
            type: 'error',
            text1: title,
            text2: msg,
            position: "bottom"
        });
    }

    showSucessToast(title, msg) {
        Toast.show({
            type: 'success',
            text1: title,
            text2: msg,
            position: "bottom"

        });
    }

    resetStackGo(navigation, screenName) {
        navigation.reset({
            index: 0,
            routes: [{ name: screenName }],
        })
    }

    removeEmojis(string) {
        var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return string.replace(regex, "");
    }


    tokenExpireTimeFormatter(time) {
        var curentDateTime = moment(new Date())
        var sessionExpireDateTime = moment(curentDateTime).add(time, 'seconds')
        return (sessionExpireDateTime)
    }

    addTimeInGivenTime(date, time) {
        var curentDateTime = moment(date)
        var extendedCurrentDateTime = moment(curentDateTime).add(time, 'seconds')
        return (extendedCurrentDateTime)
    }

    formatTimeAccordingToServerRequirement(dateTime) {
        if (dateTime) {
            return (moment(dateTime).format('YYYY-MM-DD HH:mm:ss'))
        }
        return ("")

    }

    checkTokenAvailable(time) {
        var curentDateTime = moment(new Date())
        var sessionTime = moment(time)
        return (sessionTime.isAfter(curentDateTime))
    }

    imageLinkFetcher(dataSet, imageTag) {
        var imageLinks = []
        dataSet.forEach(element => {
            imageLinks.push(element[imageTag])
        });
        return (imageLinks)
    }

    mapLinkGenerator(lat, long, name) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${long}`;
        const label = name;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        return (url)
    }

    getFormatedTime(time) {
        if (time) {
            const today = moment(new Date()).format("YYYY-DD-MM")
            return (
                moment(`${today}:${time}`, "YYYY-DD-MM HH:mm:ss").toDate()
            )
        }
        return ""
    }



    SetricSign() {
        return (
            <View>
                <Text style={{ color: theme.colors.red }}>*</Text>
            </View>
        )
    }

    commaSeparetor(x) {
        return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    NoRecordFound() {
        // const { t } = useTranslation();
        return (<View
            style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            }}>
            <Image
                style={{ width: 200, height: 200 }}
                source={require("../assets/images/noData.png")}
            />
            <Text style={{ textAlign: "center" }}>{("No Record Found !")}</Text>
        </View>
        )
    };


    HeaderSerachBar(onTextChange, SearchButton, SEARCHTEXTPARENT, backButtonDesign) {
        const { t } = useTranslation();
        const [loading, setLoading] = useState(true)
        const [searchVisible, setSearchVisible] = useState(false);
        const [searchText, setsearchText] = useState("")
        return (<View style={{
            // backgroundColor: "red"
        }}>
            <TouchableOpacity
                style={{
                    // position: "absolute",
                    // right: 0,
                    // top: 45,
                    // width: 50,
                    // height: 40,
                    // justifyContent: "center",
                }}
                activeOpacity={0.7}
                onPress={() => {
                    setSearchVisible(true)
                    SearchButton(true)
                }}
            >
                <SearchIcon width={18} height={18} />
            </TouchableOpacity>
            {searchVisible &&
                <View style={{
                    // position: "absolute",
                    flexDirection: "row",
                    alignItems: 'center',
                    width: config.DEVICE_WINDOW_WIDTH,
                    // height: 100,
                    backgroundColor: theme.colors.primary,
                    borderBottomLeftRadius: theme.borderRadius.xl,
                    borderBottomRightRadius: theme.borderRadius.xl,
                    marginTop: 0
                }}>
                    <View style={{ ...backButtonDesign }}>
                        <BackButton
                            buttonType={"back"}
                            // onPress={() => onBackButtonPress()}
                            onPress={() => {
                                setSearchVisible(false);
                                SearchButton(false)
                            }}
                        />
                    </View>

                    <View style={{
                        // backgroundColor: theme.colors.secondaryLight1,
                        width: config.DEVICE_WINDOW_WIDTH - 170,
                        // height: config.DEVICE_WINDOW_HEIGHT / 18,
                        height: 60,
                        borderRadius: 10,
                        marginTop: Platform.OS == "ios" ? 40 : 24,
                        marginLeft: -10,
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <View style={{
                            backgroundColor: theme.colors.white,
                            borderColor: theme.colors.grayBorder, borderRadius: 15,
                            paddingHorizontal: 10,
                            marginBottom: 10,
                            width: config.DEVICE_WINDOW_WIDTH / 1.5,
                            marginLeft: 10,
                            height: 40
                        }}>
                            <TextInput
                                style={{
                                    flex: 1,
                                    // paddingVertical: 3,
                                    marginHorizontal: 5,
                                }}
                                placeholder={t("Search here....")}
                                placeholderTextColor={theme.colors.darkGray1}
                                value={SEARCHTEXTPARENT == "" ? "" : searchText}
                                onChangeText={(text) => {
                                    setsearchText(text)
                                    onTextChange(text)
                                }}

                            />
                        </View>

                    </View>

                </View>
            }
        </View>)
    }



}