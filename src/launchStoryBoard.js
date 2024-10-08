const getLaunchStoryBoardRawXml = () => {
  const launchStoryBoard = `<?xml version="1.0" encoding="UTF-8"?>
    <document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="17506" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
        <device id="retina6_7" orientation="portrait" appearance="light"/>
        <dependencies>
            <deployment identifier="iOS"/>
            <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="17505"/>
            <capability name="Safe area layout guides" minToolsVersion="9.0"/>
            <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
        </dependencies>
        <scenes>
            <!--View Controller-->
            <scene sceneID="EHf-IW-A2E">
                <objects>
                    <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                        <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
                            <rect key="frame" x="0.0" y="0.0" width="428" height="926"/>
                            <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
                            <subviews>
                                <imageView clipsSubviews="YES" userInteractionEnabled="NO" contentMode="scaleAspectFill" horizontalHuggingPriority="251" verticalHuggingPriority="251" image="LaunchImage" translatesAutoresizingMaskIntoConstraints="NO" id="dYi-jT-aTL">
                                    <rect key="frame" x="0.0" y="0.0" width="428" height="926"/>
                                </imageView>
                            </subviews>
                            <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS"/>
                            <color key="backgroundColor" red="1" green="1" blue="1" alpha="1" colorSpace="custom" customColorSpace="sRGB"/>
                            <constraints>
                                <constraint firstAttribute="bottom" secondItem="dYi-jT-aTL" secondAttribute="bottom" id="85g-85-dEV"/>
                                <constraint firstItem="dYi-jT-aTL" firstAttribute="top" secondItem="Ze5-6b-2t3" secondAttribute="top" id="Bap-8O-G5h"/>
                                <constraint firstItem="dYi-jT-aTL" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" id="Kck-Dv-9E7"/>
                                <constraint firstItem="Bcu-3y-fUS" firstAttribute="trailing" secondItem="dYi-jT-aTL" secondAttribute="trailing" id="qoA-bT-t6R"/>
                            </constraints>
                        </view>
                    </viewController>
                    <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
                </objects>
                <point key="canvasLocation" x="150" y="126"/>
            </scene>
        </scenes>
        <resources>
            <image name="LaunchImage" width="270" height="480"/>
        </resources>
    </document>`;
  return launchStoryBoard;
};

export default getLaunchStoryBoardRawXml;
