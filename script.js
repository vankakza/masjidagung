(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_3A590D9D_26C7_7A84_41BB_9B599461E6FE]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EABF2F1F_E673_20AB_41A6_0DCCBEDB3785], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C_playlist,this.mainPlayList]); this.DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C_playlist.set('selectedIndex', 0)",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "class": "Player",
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.IconButton_EABF2F1F_E673_20AB_41A6_0DCCBEDB3785",
  "this.Container_32F37053_26C3_499C_41B9_8A68C41B55C5",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.44,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_063202E1_273F_4EBD_41BE_AE7E9D7F99FB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39596FC4_273F_56FB_41BC_9AA9E1B097D3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_383720DD_273F_4A84_418B_03D50EB9BFCE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 157.82,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_384020ED_273F_4A85_41BE_13C91A71F2E6"
},
{
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EABF2F1F_E673_20AB_41A6_0DCCBEDB3785",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_34F3062B_26CD_498D_41C2_C615F0245518",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_37A6FCA4_26CD_BA84_41AD_981A7493EA81",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_3759580C_26CD_D984_41C2_354C0F792B1B",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_375C1E92_26CD_D69C_41B6_697AF539CCD2",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.3,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_051BA3AC_273F_4E8B_4197_5C86E2B504E2"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.57,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39A27031_273F_499C_41B1_43EB3BB073F1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3E299E9A_35BD_846C_4177_500B8C56F692_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_221904_813",
 "hfovMin": "135%",
 "id": "panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D219A4AC_C552_0132_41E6_9D20BAAA09FA",
  "this.overlay_DC0243C4_C552_0772_41DC_02A20CF2840D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 54.28,
   "distance": 1,
   "backwardYaw": 79.3,
   "panorama": "this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -20.32,
   "distance": 1,
   "backwardYaw": -0.86,
   "panorama": "this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1582.68,
   "x": 2828.41
  }
 ],
 "thumbnailUrl": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_381460BE_273F_4A87_41BA_7957B119C0AB"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222159_381",
 "hfovMin": "135%",
 "id": "panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DAB30AFE_C532_010E_41B6_26757BECC320",
  "this.overlay_E76E6D9D_C532_0312_41E1_0D30F5A40A66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.47,
   "distance": 1,
   "backwardYaw": -11.16,
   "panorama": "this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.21,
   "distance": 1,
   "backwardYaw": -103.15,
   "panorama": "this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_384AC0FC_273F_4A84_419A_8468555E5A35"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_camera"
},
{
 "levels": [
  {
   "url": "media/popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463_0_0.jpeg",
   "class": "ImageResourceLevel",
   "width": 1500,
   "height": 2000
  },
  {
   "url": "media/popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463_0_1.jpeg",
   "class": "ImageResourceLevel",
   "width": 768,
   "height": 1024
  },
  {
   "url": "media/popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463_0_2.jpeg",
   "class": "ImageResourceLevel",
   "width": 384,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_D7981383_E395_9804_41A1_CD53ABA1064F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0669DEAB_273F_568D_41BF_F90EB1FEDEBE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.82,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06F1137D_273F_4F85_41BC_E2B432E13597"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8.1",
 "hfovMin": "135%",
 "id": "panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C3884D37_E0C0_A4E1_41E9_0CE90F3B5505",
  "this.overlay_C31CF668_E0C0_A56F_41C2_873C83F960BD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 166.9,
   "distance": 1,
   "backwardYaw": -142.77,
   "panorama": "this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -12.68,
   "distance": 1,
   "backwardYaw": 103.79,
   "panorama": "this.panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.24,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06E0636D_273F_4F84_41B1_7BB7F06AF721"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5",
 "hfovMin": "135%",
 "id": "panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F7B3D0FF_E0CF_FD61_41E1_9C836227EED0",
  "this.overlay_F61B736D_E0C0_E361_41EB_394AD750B728",
  "this.overlay_CBAFC517_E39A_980C_41E4_EF120C742064",
  "this.overlay_C95A25EF_E3AB_B81C_41D3_F4C97063FAEE",
  "this.overlay_3A15567F_35DB_84A4_41C9_02DB61F8F089"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.66,
   "distance": 1,
   "backwardYaw": 174.39,
   "panorama": "this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.57,
   "distance": 1,
   "backwardYaw": 3.26,
   "panorama": "this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.71,
   "distance": 1,
   "backwardYaw": 178.07,
   "panorama": "this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.74,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39E1E07F_273F_4984_419F_6091BE55F028"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.78,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_067A031F_273F_4F84_419A_0D742C306AE1"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8",
 "hfovMin": "135%",
 "id": "panorama_EBAEE221_E0C0_DCE0_41B9_496448121858",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C03AC909_E0C0_ECA1_41E7_22086A177944",
  "this.overlay_C17EFF85_E0C1_E3A1_41C1_23DBCB9CC00C",
  "this.overlay_C0497581_E0C0_A7A1_41E1_55D25137190E",
  "this.overlay_254C9F86_35DE_8464_41B6_C29F6FDEB4B3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.94,
   "distance": 1,
   "backwardYaw": 173.51,
   "panorama": "this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -142.77,
   "distance": 1,
   "backwardYaw": 166.9,
   "panorama": "this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.61,
   "distance": 1,
   "backwardYaw": -1.75,
   "panorama": "this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481_0_0.jpeg",
   "class": "ImageResourceLevel",
   "width": 1500,
   "height": 2000
  },
  {
   "url": "media/popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481_0_1.jpeg",
   "class": "ImageResourceLevel",
   "width": 768,
   "height": 1024
  },
  {
   "url": "media/popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481_0_2.jpeg",
   "class": "ImageResourceLevel",
   "width": 384,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_D75023F1_E395_9804_41DC_A5E431F69C1D"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13.2",
 "hfovMin": "135%",
 "id": "panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF04489F_E3BB_A83C_41D8_936BB719C7EE",
  "this.overlay_C82D5F42_E3BA_E804_41E7_D9D1DA865217"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 163.59,
   "distance": 1,
   "backwardYaw": 132.26,
   "panorama": "this.panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 151.2,
   "distance": 1,
   "backwardYaw": 165.93,
   "panorama": "this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222053_203",
 "hfovMin": "135%",
 "id": "panorama_CF6CF6DE_C536_010E_41E7_59982BE47262",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DBDE771D_C536_0F12_41DB_C779D9908CBB",
  "this.overlay_DBC7BCDC_C532_0112_41E5_850AFEC0BA00"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 101.23,
   "distance": 1,
   "backwardYaw": -96.41,
   "panorama": "this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -105.66,
   "distance": 1,
   "backwardYaw": 89.9,
   "panorama": "this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_060982B2_273F_4E9F_41B7_E83C69953FAA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3889013B_273F_4B8D_41A7_D82E235402A4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.34,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07A9A254_273F_4984_419A_B90D6188F602"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Outer Park",
 "overlays": [
  "this.overlay_3E3F50FC_26C5_4A84_41B9_95882B5101F0"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.89,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38D4A189_273F_4A8D_41C0_A82ED4D304A7"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "3",
 "hfovMin": "150%",
 "id": "panorama_3E299E9A_35BD_846C_4177_500B8C56F692",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3E265E9A_35BD_846C_41C6_4251C368FED7",
  "this.overlay_3E268E9A_35BD_846C_4186_665DCF9270D1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 96.98,
   "distance": 1,
   "backwardYaw": -11.16,
   "panorama": "this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -12.61,
   "distance": 1,
   "backwardYaw": -86.27,
   "panorama": "this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.75,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_079B8244_273F_4984_41B2_2D10796AEA4C"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222255_467",
 "hfovMin": "135%",
 "id": "panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D0C5ADA3_C56E_0336_41D4_D85EE2E1CFC6",
  "this.overlay_D9288CE6_C52E_013E_41E1_BF0C5CF89286",
  "this.overlay_D018B6AE_E3AB_981C_41D0_C412BEE7E222",
  "this.popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -94.39,
   "distance": 1,
   "backwardYaw": -104.47,
   "panorama": "this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.59,
   "distance": 1,
   "backwardYaw": -60.25,
   "panorama": "this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.23,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_065C9300_273F_4F7B_41AF_D8F03394CDA8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38A3115A_273F_4B8C_41B5_67FEE6207B34"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3871112B_273F_4B8C_41B2_5ED91D2F9C8A"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_375C1E92_26CD_D69C_41B6_697AF539CCD2",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_375C1E92_26CD_D69C_41B6_697AF539CCD2.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_375C1E92_26CD_D69C_41B6_697AF539CCD2_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Mercusuar Yard",
 "overlays": [
  "this.overlay_3EB3DD49_26C6_BB8C_41B7_184D3B22B586"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_375C1E92_26CD_D69C_41B6_697AF539CCD2_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_221958_549",
 "hfovMin": "135%",
 "id": "panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DD9F6EBB_C556_0116_41E0_281141F3327F",
  "this.overlay_DC005417_C556_011E_41CA_9A09A1DEDCAD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -84.32,
   "distance": 1,
   "backwardYaw": -1,
   "panorama": "this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 19.11,
   "distance": 1,
   "backwardYaw": 178.24,
   "panorama": "this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.3,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07C39273_273F_499C_41BF_85444AE16BFC"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.34,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38AF816A_273F_4B8F_41B9_F5CF381C7054"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 8.91,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463_0_1.jpeg",
    "class": "ImageResourceLevel",
    "width": 768,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 14.61,
 "popupMaxHeight": "95%",
 "hideEasing": "cubic_out",
 "yaw": -52.88
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.63,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0699332F_273F_4F85_41BB_8A11FE78F3F1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3862611C_273F_4B8B_41C0_A03E47D2A0EE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.29,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39858012_273F_499C_41B7_20786F2DBA25"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_camera"
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_053683BB_273F_4E8C_41C2_CC02CCEB8CD7"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39743FF3_273F_569D_41B8_67627353403D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06FFA38C_273F_4E84_41B1_C5436699CABC"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13.1",
 "hfovMin": "135%",
 "id": "panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F478E11A_E39A_9804_41DC_9553FD78A3A9",
  "this.overlay_FB617E83_E395_A804_41B3_C005C7B54E4D",
  "this.overlay_3A16F616_35C6_8464_41C2_19A27B5C410B",
  "this.overlay_25CDBAEA_35C6_8DAC_41C3_FAB4939FD96E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.02,
   "distance": 1,
   "backwardYaw": 82.52,
   "panorama": "this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.93,
   "distance": 1,
   "backwardYaw": 151.2,
   "panorama": "this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_3759580C_26CD_D984_41C2_354C0F792B1B",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1677.88,
   "x": 2983.41
  }
 ],
 "thumbnailUrl": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10",
 "hfovMin": "135%",
 "id": "panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F1C362F0_E3B5_B804_41C2_ADFBBADAAD25",
  "this.overlay_F7383719_E3AA_B804_418F_5EDC20438AF2",
  "this.overlay_3A67604B_35DA_BCEC_41B9_D2BA2BBD0C1F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.43,
   "distance": 1,
   "backwardYaw": -65.34,
   "panorama": "this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.7,
   "distance": 1,
   "backwardYaw": 3,
   "panorama": "this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.54,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_064D5E9B_273F_568C_41AB_BE7DCCA151FA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.16,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_061C4E5D_273F_5985_41B6_1D911ED16A5A"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "22",
 "hfovMin": "135%",
 "id": "panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F8D62FEB_E3EB_E804_41DC_F874C270E093",
  "this.overlay_FD1F7873_E3F5_A804_41CC_0EE221BF1993",
  "this.overlay_E66AAFB6_E94A_D734_41DE_E833A5431199",
  "this.overlay_E624F688_E946_E9DC_41DE_C851B815369C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -135.53,
   "distance": 1,
   "backwardYaw": 86.28,
   "panorama": "this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -22.18,
   "distance": 1,
   "backwardYaw": -38.56,
   "panorama": "this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 55.03,
   "distance": 1,
   "backwardYaw": -1.42,
   "panorama": "this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_375C1E92_26CD_D69C_41B6_697AF539CCD2",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1539.5,
   "x": 2884.32
  }
 ],
 "thumbnailUrl": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15",
 "hfovMin": "135%",
 "id": "panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C3F8EF81_E3FD_A804_41D4_E96C8F1D7922",
  "this.overlay_FD800117_E942_42AA_41D4_3EB68F8077DC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 113.84,
   "distance": 1,
   "backwardYaw": -29.09,
   "panorama": "this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.05,
   "distance": 1,
   "backwardYaw": -51.78,
   "panorama": "this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221016_154821_436",
 "hfovMin": "135%",
 "id": "panorama_CC802CD9_E3B7_6804_41EA_774204EC6934",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D1E0539B_E3B7_9804_41D8_005CB207CC8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -84.93,
   "distance": 1,
   "backwardYaw": -167.03,
   "panorama": "this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.57,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_077FF235_273F_4985_4196_7B21BB919A2E"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5.2",
 "hfovMin": "135%",
 "id": "panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FC89123B_E0C0_FCE1_41C0_350FBB071BC6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 104.61,
   "distance": 1,
   "backwardYaw": 9.67,
   "panorama": "this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06281E6C_273F_5984_41B6_A14C095AB4F9"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2",
 "hfovMin": "135%",
 "id": "panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F33361A8_E0C0_BFEF_41E9_92B8BCF0339D",
  "this.overlay_F3A4875E_E0C7_A4A3_41B4_4F63D2CAC1B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 177.63,
   "distance": 1,
   "backwardYaw": -11.16,
   "panorama": "this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -11.16,
   "distance": 1,
   "backwardYaw": 96.98,
   "panorama": "this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.03,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_392A3F66_273F_5784_41BA_8C1EB16FB5FE"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3A590D9D_26C7_7A84_41BB_9B599461E6FE.ogg",
  "mp3Url": "media/audio_3A590D9D_26C7_7A84_41BB_9B599461E6FE.mp3"
 },
 "id": "audio_3A590D9D_26C7_7A84_41BB_9B599461E6FE",
 "data": {
  "label": "TONG SARAKAH INSTRUMENTAL (HIGH QUALITY AUDIO) - LAGU DAERAH BANTEN"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222335_205",
 "hfovMin": "135%",
 "id": "panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D7617E2E_C572_010E_41D5_C4C3FCB07D85",
  "this.overlay_D48073BE_C572_070E_41E2_6E901A854806",
  "this.overlay_CCCFF185_E3BD_780C_41E6_5CA219E165BD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -176.15,
   "distance": 1,
   "backwardYaw": 2.75,
   "panorama": "this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3.46,
   "distance": 1,
   "backwardYaw": -94.16,
   "panorama": "this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 87.44,
   "distance": 1,
   "backwardYaw": 28.11,
   "panorama": "this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_97EF9306_8495_AEBD_41D1_723CF9F08DB1"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38BAB16A_273F_4B8F_41B8_189EF78FF274"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C89F714D_E3B6_981C_41CB_005250412720_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.68,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06A7F33E_273F_4F84_41B2_9659AD59084A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_392EFF76_273F_5787_41C1_33F377EC38C9"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF579672_C532_0116_41DA_E22B6EF26E22_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "21",
 "hfovMin": "135%",
 "id": "panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FFDD200C_E3EA_B81C_41BD_86B91BF59CFA",
  "this.overlay_FE2C7EF9_E3F5_6804_41C3_8E7F48B850D1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -38.56,
   "distance": 1,
   "backwardYaw": -22.18,
   "panorama": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -107.35,
   "distance": 1,
   "backwardYaw": 80.15,
   "panorama": "this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06B4B34E_273F_4F87_4164_14A2DC13370E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07B5D264_273F_49BB_41BE_BD7C717BFE7C"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39F7609F_273F_4A85_41B9_FD941FF77DC6"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222506_771",
 "hfovMin": "135%",
 "id": "panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CB1D2542_C552_0376_41E5_E6D25F577851",
  "this.overlay_ED150C43_E0DF_E4A1_41E2_74F8686633DD",
  "this.overlay_3A5C0540_35BB_84DC_4176_960068536EF8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 69.41,
   "distance": 1,
   "backwardYaw": -166.21,
   "panorama": "this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -5.22,
   "distance": 1,
   "backwardYaw": 169.47,
   "panorama": "this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3948FFA5_273F_5685_41BA_B3EB7F5595B8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.58,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0640E2E1_273F_4EBD_41BB_CC0C25939E4E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39B6F050_273F_499C_41B7_9A295BC94079"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.56,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0547B3CB_273F_4E8D_41C3_7318335AB59B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.27,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38E37199_273F_4A8D_4180_97D9741A5435"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 9.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481_0_1.jpeg",
    "class": "ImageResourceLevel",
    "width": 768,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.26,
 "popupMaxHeight": "95%",
 "hideEasing": "cubic_out",
 "yaw": 0.82
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.74,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_056293EA_273F_4E8C_41A4_8135FE8B6C7B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07FBF2A2_273F_4EBC_41B8_A77FF91AEA80"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_camera"
  },
  "this.PanoramaPlayListItem_07963D82_273F_5B7F_41A5_EBEE7855E8FA",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_camera"
  },
  "this.PanoramaPlayListItem_079A5D92_273F_5A9F_41BB_053730ACDED8",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_camera"
  },
  "this.PanoramaPlayListItem_079C2D92_273F_5A9F_41BA_1E8E586D49BC",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_camera"
  },
  "this.PanoramaPlayListItem_07A1ED92_273F_5A9F_419A_4A1B09DB30D9",
  "this.PanoramaPlayListItem_07A01D92_273F_5A9F_41B7_CCB272374825",
  "this.PanoramaPlayListItem_07A0ED92_273F_5A9F_41B7_BE9499403DF4",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_camera"
  },
  "this.PanoramaPlayListItem_07A4ADA1_273F_5ABC_4188_0F8B218F3CB9",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC802CD9_E3B7_6804_41EA_774204EC6934",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_C89F714D_E3B6_981C_41CB_005250412720",
   "camera": "this.panorama_C89F714D_E3B6_981C_41CB_005250412720_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222217_334",
 "hfovMin": "135%",
 "id": "panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DFA88950_C552_0313_41E0_C9629967ECC3",
  "this.overlay_DE8AEE61_C552_0132_41DE_940DBFCF9411"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 11.83,
   "distance": 1,
   "backwardYaw": 179.8,
   "panorama": "this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -75.9,
   "distance": 1,
   "backwardYaw": 80.06,
   "panorama": "this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_397BD002_273F_497C_41BB_F63088F3CDC1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07D18283_273F_497D_41C2_B7138F5A04DA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.2,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_393D7F95_273F_5684_41B5_C16727F5F5AC"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222238_119",
 "hfovMin": "135%",
 "id": "panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D1EE1F69_C572_7F32_41BD_344CD677EBD2",
  "this.overlay_D002000E_C56E_010E_41C4_8E12FE617C16",
  "this.overlay_DEA96A05_C52E_00F2_41E4_0A3038F5B4D1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.16,
   "distance": 1,
   "backwardYaw": 170.47,
   "panorama": "this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -104.47,
   "distance": 1,
   "backwardYaw": -94.39,
   "panorama": "this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.06,
   "distance": 1,
   "backwardYaw": -75.9,
   "panorama": "this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0555D3DB_273F_4E8D_41B1_847199C18BA4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07EDE292_273F_4E9C_41C2_087E8B2F9689"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06B0EEE9_273F_568C_41BE_A5A8891B6E6C"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_065B6E9B_273F_568C_41B8_C6F0DDA76786"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07DFA283_273F_497D_41B3_00A2ABAA2576"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222111_354",
 "hfovMin": "135%",
 "id": "panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DC2696FB_C556_0116_41E0_C8E30B1C92A5",
  "this.overlay_DC4569F6_C556_031E_41CD_CA1ECCD9717E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.24,
   "distance": 1,
   "backwardYaw": -2.37,
   "panorama": "this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1,
   "distance": 1,
   "backwardYaw": -84.32,
   "panorama": "this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_D18C8254_E3AF_980C_41EA_E35325B1CA74_0_0.jpeg",
   "class": "ImageResourceLevel",
   "width": 1599,
   "height": 1200
  },
  {
   "url": "media/popup_D18C8254_E3AF_980C_41EA_E35325B1CA74_0_1.jpeg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 768
  },
  {
   "url": "media/popup_D18C8254_E3AF_980C_41EA_E35325B1CA74_0_2.jpeg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_D794A374_E395_980C_41D1_00B4F962FDBD"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_396CCFE3_273F_56BC_41BF_E0E9D1A054F6"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Entrance",
 "overlays": [
  "this.overlay_31BD7AE3_26C2_DEBD_41AD_B97229E1C78C"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07DABDEF_273F_5A84_4173_8DBFAF5D27C2"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221016_154843_704",
 "hfovMin": "135%",
 "id": "panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CD147A0B_E3BE_A804_41E4_8E453235FA13",
  "this.overlay_CC395DF3_E3BA_A804_41E6_CFB64F2E2A56",
  "this.overlay_D1979B36_E3BB_E80C_41EC_3F1190D03F34",
  "this.overlay_D22981D9_E3B6_F804_41D7_A4BA2CFC2957",
  "this.popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 85.05,
   "distance": 1,
   "backwardYaw": -120.27,
   "panorama": "this.panorama_C89F714D_E3B6_981C_41CB_005250412720"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -167.03,
   "distance": 1,
   "backwardYaw": -84.93,
   "panorama": "this.panorama_CC802CD9_E3B7_6804_41EA_774204EC6934"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -94.16,
   "distance": 1,
   "backwardYaw": 3.46,
   "panorama": "this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "7",
 "hfovMin": "135%",
 "id": "panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FD5F0673_E0C0_6561_41E8_716D8100F6C1",
  "this.overlay_CFD3BE1E_E397_E83C_41D2_2D934CEB2AF6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.75,
   "distance": 1,
   "backwardYaw": 86.61,
   "panorama": "this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.07,
   "distance": 1,
   "backwardYaw": -8.71,
   "panorama": "this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07E4DE0F_273F_5985_41BF_31FE2FED31B4"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222355_808",
 "hfovMin": "135%",
 "id": "panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D66BAAC1_C56E_0172_41BF_7B480D99BD1E",
  "this.overlay_CF21ECD4_E3AD_A83C_41E1_2D4FECABBB46"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -126.15,
   "distance": 1,
   "backwardYaw": -8.3,
   "panorama": "this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.75,
   "distance": 1,
   "backwardYaw": -176.15,
   "panorama": "this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06A26EDA_273F_568F_41BD_579AD74C0C3F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.49,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39982022_273F_49BF_4198_B738B756A88D"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "hfovMin": "135%",
 "id": "panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F6840BF6_E3AE_E80C_41B4_2326713BD674",
  "this.overlay_F75987E6_E3AD_780C_41E0_BC78599AD2E7",
  "this.overlay_F5E757EB_E395_F804_41B2_DB6FEFF67CBA",
  "this.overlay_3635A4C3_26B9_3868_41C0_55E944410039",
  "this.overlay_3A7B19B9_35DA_8FAF_41C0_6DAE47C92675"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 82.52,
   "distance": 1,
   "backwardYaw": 151.02,
   "panorama": "this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.7,
   "distance": 1,
   "backwardYaw": 97.51,
   "panorama": "this.panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -65.34,
   "distance": 1,
   "backwardYaw": -4.43,
   "panorama": "this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_37A6FCA4_26CD_BA84_41AD_981A7493EA81",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1635.05,
   "x": 2909.45
  }
 ],
 "thumbnailUrl": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20",
 "hfovMin": "135%",
 "id": "panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FE71E484_E3F6_F80C_41D3_DE2B928A34C2",
  "this.overlay_CB73BFD3_E3EE_E804_41DC_4A018B662F7B",
  "this.overlay_CB2F7298_E3ED_9804_41D3_EA25BF8A5697"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 80.15,
   "distance": 1,
   "backwardYaw": -107.35,
   "panorama": "this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -80.43,
   "distance": 1,
   "backwardYaw": 12.16,
   "panorama": "this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39FEB09F_273F_4A85_41B3_7B8593450D0A"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_37A6FCA4_26CD_BA84_41AD_981A7493EA81",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_37A6FCA4_26CD_BA84_41AD_981A7493EA81.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_37A6FCA4_26CD_BA84_41AD_981A7493EA81_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Hall",
 "overlays": [
  "this.overlay_3036F6EE_26C5_D687_41B9_E128CBBC2CD0"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_37A6FCA4_26CD_BA84_41AD_981A7493EA81_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06870ECA_273F_568F_41B7_611E4523A254"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -123.74,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0771E225_273F_4984_41BD_36E51E5CEBE0"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "4",
 "hfovMin": "135%",
 "id": "panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F5125CAC_E0C0_A5E7_4167_2D6029595931",
  "this.overlay_F516B3AE_E0C1_A3E3_41D4_E6B18F8D3333"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 3.26,
   "distance": 1,
   "backwardYaw": 178.57,
   "panorama": "this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -86.27,
   "distance": 1,
   "backwardYaw": -12.61,
   "panorama": "this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38FAD1A8_273F_4A8C_41A7_665AB5C00B7E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_066D930F_273F_4F84_4184_C76B5756AE4B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_078DE244_273F_4984_41B7_87202891E060"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.78,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06D3436D_273F_4F84_4140_F03D29368E38"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3856310C_273F_4B8B_41BD_1CC9D236CCB4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06419E8B_273F_568C_41B9_6297C7D81F93"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_072021D7_273F_4A84_41B2_4C0DB76EBA61"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "9",
 "hfovMin": "135%",
 "id": "panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EC690AB3_E3B7_A804_41E7_AF01ED20AC25",
  "this.overlay_C9DBFCA0_E395_6804_41E6_C17CA44E7E21",
  "this.overlay_F98602A7_E3EE_980C_41D9_3193CC07C74C",
  "this.overlay_295AD3D7_26BB_3868_4189_39BD1699E0F4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 173.51,
   "distance": 1,
   "backwardYaw": -0.94,
   "panorama": "this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.28,
   "distance": 1,
   "backwardYaw": -135.53,
   "panorama": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3,
   "distance": 1,
   "backwardYaw": 177.7,
   "panorama": "this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_387A612B_273F_4B8C_41A8_16BB3A4CE928"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07542206_273F_4987_41B8_D5BFE0ECAE27"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221016_154927_972",
 "hfovMin": "135%",
 "id": "panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CDF92625_E3BE_980C_41E2_0D6DA9191A66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 132.26,
   "distance": 1,
   "backwardYaw": 163.59,
   "panorama": "this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.14,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06C2F35E_273F_4F87_41AA_802BA2BADF38"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_382A60DD_273F_4A84_41B6_2E30183C4EFA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.91,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0709F1B8_273F_4A8B_41C2_60F1B225E26B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0746A1F6_273F_4A84_41BE_4952FB825734"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.62,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_072F11E7_273F_4A85_4199_59E5CCE4999A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.41,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39678FD4_273F_569B_416D_49834A2AC5E0"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "hfovMin": "135%",
 "id": "panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F5BE8A99_E395_6804_41CF_F6569D5D6DB3",
  "this.overlay_296E1BE1_26A9_2828_419F_9D89BD57CE33"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 97.51,
   "distance": 1,
   "backwardYaw": -3.7,
   "panorama": "this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1638.95,
   "x": 2902.02
  }
 ],
 "thumbnailUrl": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 12.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D18C8254_E3AF_980C_41EA_E35325B1CA74",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D18C8254_E3AF_980C_41EA_E35325B1CA74_0_1.jpeg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.82,
 "popupMaxHeight": "95%",
 "hideEasing": "cubic_out",
 "yaw": -154.64
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39CD6060_273F_49BC_419A_E638212AB159"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222311_199",
 "hfovMin": "135%",
 "id": "panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D48EBF3B_C572_3F16_41D5_B0111881420A",
  "this.overlay_D6750BBF_C572_070E_41E8_201C0EE08D97",
  "this.overlay_D9E1D483_C52E_01F6_41C5_DD03C1C8AA0F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -60.25,
   "distance": 1,
   "backwardYaw": 170.59,
   "panorama": "this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 118.02,
   "distance": 1,
   "backwardYaw": 177.34,
   "panorama": "this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 28.11,
   "distance": 1,
   "backwardYaw": 87.44,
   "panorama": "this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17",
 "hfovMin": "135%",
 "id": "panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C63EA5A8_E3EB_7804_41DE_1730B9C232F1",
  "this.overlay_C6462ADA_E3EE_E804_41EA_8B1230704254",
  "this.overlay_FAD4CB17_E941_C6AA_41BB_FF3DA69C493D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 56.26,
   "distance": 1,
   "backwardYaw": -48.22,
   "panorama": "this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -105.38,
   "distance": 1,
   "backwardYaw": 149.76,
   "panorama": "this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 136.33,
   "distance": 1,
   "backwardYaw": 57.18,
   "panorama": "this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_065142F0_273F_4E9C_41C1_249408F4BF37"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "hfovMin": "135%",
 "id": "panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FED9A0AE_E3F6_B81C_41C2_049685D6BBAB",
  "this.overlay_C66832D4_E3F5_F80C_41BB_8912004E734E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.42,
   "distance": 1,
   "backwardYaw": 55.03,
   "panorama": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.76,
   "distance": 1,
   "backwardYaw": -105.38,
   "panorama": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222412_831",
 "hfovMin": "135%",
 "id": "panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D45B4B91_C56E_0715_41B8_C9A698DFAF01",
  "this.overlay_D793CE06_C56E_00FA_41E6_88B0AD79D774"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 174.97,
   "distance": 1,
   "backwardYaw": 91.93,
   "panorama": "this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.3,
   "distance": 1,
   "backwardYaw": -126.15,
   "panorama": "this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222450_022",
 "hfovMin": "135%",
 "id": "panorama_CF579672_C532_0116_41DA_E22B6EF26E22",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CA9319BA_C552_0316_41DB_B925B434863C",
  "this.overlay_CAAD4A8B_C552_01F6_41CD_BB6B1630A3E9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 12.16,
   "distance": 1,
   "backwardYaw": -84.39,
   "panorama": "this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.21,
   "distance": 1,
   "backwardYaw": 69.41,
   "panorama": "this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07F02E1E_273F_59B7_41C0_D4979490AB20"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222020_734",
 "hfovMin": "135%",
 "id": "panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D17D0F6E_C572_3F0E_41D0_DECA64A967E4",
  "this.overlay_D108822F_C572_010E_41DD_B436AE503869"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.41,
   "distance": 1,
   "backwardYaw": 101.23,
   "panorama": "this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.73,
   "distance": 1,
   "backwardYaw": -114.14,
   "panorama": "this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.49,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39C33060_273F_49BC_41BF_D9195EE0449F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_camera"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_3759580C_26CD_D984_41C2_354C0F792B1B",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_3759580C_26CD_D984_41C2_354C0F792B1B.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_3759580C_26CD_D984_41C2_354C0F792B1B_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Grave",
 "overlays": [
  "this.overlay_312A98C2_26C7_DAFC_41C0_50F025F17580"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_3759580C_26CD_D984_41C2_354C0F792B1B_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.93,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_05736409_273F_498C_41C0_8B5BE9FC6720"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.41,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_052823BB_273F_4E8C_41B3_5CCA1E7E6148"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.33,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07FD9E3D_273F_5984_41C1_3CD6656DFCF6"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222128_405",
 "hfovMin": "135%",
 "id": "panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DBB943E0_C532_0732_41C7_9BBFDA53EF6C",
  "this.overlay_DA950580_C532_03F2_41D8_7D8CFDF0BD08"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89.9,
   "distance": 1,
   "backwardYaw": -105.66,
   "panorama": "this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -103.15,
   "distance": 1,
   "backwardYaw": -4.21,
   "panorama": "this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06343E7C_273F_598B_41BE_C072A65E5235"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.83,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0612AE5D_273F_5985_41BD_A1290C179DBB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_398E0012_273F_499C_41B1_9A910F23EDB8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.89,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0695CEDA_273F_568F_41B9_5E3FF6821BC1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3951DFB4_273F_5684_41B2_72371116F777"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.25,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39D7A070_273F_499B_41B3_507E402581E5"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39EA108F_273F_4A85_418B_CD888624C040"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14",
 "hfovMin": "135%",
 "id": "panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FD15F968_E3FB_6804_41E8_B27CD699957E",
  "this.overlay_FF24CD56_E946_42AA_41E2_9D4188D7C7E2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -29.09,
   "distance": 1,
   "backwardYaw": 113.84,
   "panorama": "this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -95.63,
   "distance": 1,
   "backwardYaw": -1.39,
   "panorama": "this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19",
 "hfovMin": "135%",
 "id": "panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C7717168_E3F6_9804_41C2_DC77140941E9",
  "this.overlay_FF38026A_E95E_477A_41DA_F71C26A29A63"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -48.22,
   "distance": 1,
   "backwardYaw": 56.26,
   "panorama": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 12.16,
   "distance": 1,
   "backwardYaw": -80.43,
   "panorama": "this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_97EF9306_8495_AEBD_41D1_723CF9F08DB1.ogg",
  "mp3Url": "media/audio_97EF9306_8495_AEBD_41D1_723CF9F08DB1.mp3"
 },
 "id": "audio_97EF9306_8495_AEBD_41D1_723CF9F08DB1",
 "data": {
  "label": "sultan9 keraton"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_062502D1_273F_4E9D_415B_54D4E9944050"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Mosque",
 "overlays": [
  "this.overlay_31D3BB51_26C6_DF9D_41C1_4FA41BD275C1"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "20221016_154903_387",
 "hfovMin": "135%",
 "id": "panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62",
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_C88F4AE7_E3B6_E80C_41EA_97B436A46F62_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_07622216_273F_4987_41B9_1267935AAF8F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.86,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_395E5FD4_273F_569B_41BD_7FF17E5BCB5A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.68,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38EFC1A8_273F_4A8C_41B6_7DD0091FB6BA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0688432F_273F_4F85_41AC_5E97A0578CC7"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_34F3062B_26CD_498D_41C2_C615F0245518",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6080,
 "class": "Map",
 "image": {
  "levels": [
   {
    "url": "media/map_34F3062B_26CD_498D_41C2_C615F0245518.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1600
   },
   {
    "url": "media/map_34F3062B_26CD_498D_41C2_C615F0245518_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 362,
    "height": 181
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Inside Park",
 "overlays": [
  "this.overlay_3084BC7E_26C2_B984_41BC_6F29D1F06C5E"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_34F3062B_26CD_498D_41C2_C615F0245518_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "height": 3040
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "hfovMin": "135%",
 "id": "panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C21CF9E9_E3FE_A804_41E5_373FFCE8A055",
  "this.overlay_C19825A4_E3FD_B80C_41E6_A9FA52C131DF",
  "this.overlay_FAD56D80_E946_3DA6_41D3_7D0C8D7FDAFD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -51.78,
   "distance": 1,
   "backwardYaw": -106.05,
   "panorama": "this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.39,
   "distance": 1,
   "backwardYaw": -95.63,
   "panorama": "this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 57.18,
   "distance": 1,
   "backwardYaw": 136.33,
   "panorama": "this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_073B81F6_273F_4A84_41C0_7C6D908CE336"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_221924_809",
 "hfovMin": "135%",
 "id": "panorama_CF56D928_C536_0332_41DF_BB9C38C422E6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D3922A30_C55E_0113_416E_86A7049F001C",
  "this.overlay_D3B36F57_C55E_FF1E_41E4_1F718BD0F443"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 79.3,
   "distance": 1,
   "backwardYaw": 54.28,
   "panorama": "this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -95.92,
   "distance": 1,
   "backwardYaw": -6.17,
   "panorama": "this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_071511C7_273F_4A84_41AA_2F7A6B2E8D70"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222428_518",
 "hfovMin": "135%",
 "id": "panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D5202994_C56E_0312_41CF_04C3A5835576",
  "this.overlay_D750CDD3_C56E_0316_41C8_3D73D707287E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 91.93,
   "distance": 1,
   "backwardYaw": 174.97,
   "panorama": "this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.39,
   "distance": 1,
   "backwardYaw": 12.16,
   "panorama": "this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8.2",
 "hfovMin": "135%",
 "id": "panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C129D771_E0C0_6361_41AC_359B516995DC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 103.79,
   "distance": 1,
   "backwardYaw": -12.68,
   "panorama": "this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221016_154757_085",
 "hfovMin": "135%",
 "id": "panorama_C89F714D_E3B6_981C_41CB_005250412720",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D26EB0B3_E3B6_F804_41E0_DA5E16FF2BDD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -120.27,
   "distance": 1,
   "backwardYaw": 85.05,
   "panorama": "this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_382160CD_273F_4A84_41B5_048ED6BB3AD5"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1",
 "hfovMin": "135%",
 "id": "panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFAE626D_E0C0_7D60_41D9_1E5D3FF2D30C",
  "this.overlay_F38D1203_E0C0_BCA1_41D3_EAA809755A98"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 169.47,
   "distance": 1,
   "backwardYaw": -5.22,
   "panorama": "this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -11.16,
   "distance": 1,
   "backwardYaw": 177.63,
   "panorama": "this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1854.12,
   "x": 2855.66
  }
 ],
 "thumbnailUrl": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_39ACA041_273F_49FD_41BD_E72811D7913B"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "6",
 "hfovMin": "135%",
 "id": "panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F890AD84_E0C1_E7A7_41E5_E101F5980857",
  "this.overlay_F996DDBE_E0C0_A7E3_41CE_F48729C2E000",
  "this.overlay_C8748FAF_E395_A81C_41E8_8F76BD04EB43",
  "this.overlay_27D574F9_35DD_85AF_41C8_EFC08DB851D6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 174.39,
   "distance": 1,
   "backwardYaw": -96.66,
   "panorama": "this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.67,
   "distance": 1,
   "backwardYaw": 104.61,
   "panorama": "this.panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -26.75,
   "distance": 1,
   "backwardYaw": 95.2,
   "panorama": "this.panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222036_619",
 "hfovMin": "135%",
 "id": "panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D31576BC_C55E_0112_41D5_457C829D1EF1",
  "this.overlay_DD362D1B_C55E_0316_41E3_2014E1C6E2C5",
  "this.overlay_D1DA13D1_E3AF_9804_41E4_538D49970DB6",
  "this.popup_D18C8254_E3AF_980C_41EA_E35325B1CA74"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.17,
   "distance": 1,
   "backwardYaw": -95.92,
   "panorama": "this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.34,
   "distance": 1,
   "backwardYaw": 118.02,
   "panorama": "this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_050AE39C_273F_4E84_41A0_FB467790B734"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_38C99179_273F_4B8C_41B0_5E5EAD7C17D7"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.25,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0676AEBA_273F_568C_41B8_A79007BCC936"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_380B50AE_273F_4A84_41BF_C9563418676A"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_221943_262",
 "hfovMin": "135%",
 "id": "panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D1DD7BF3_C572_0716_41DD_B91137F5EE50",
  "this.overlay_DD6057E0_C552_0F32_41DF_3D76B23D9D3A",
  "this.overlay_DD20F388_C552_07F2_41DB_1DFC847ED046"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.24,
   "distance": 1,
   "backwardYaw": 19.11,
   "panorama": "this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -114.14,
   "distance": 1,
   "backwardYaw": 95.73,
   "panorama": "this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.86,
   "distance": 1,
   "backwardYaw": -20.32,
   "panorama": "this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5.1",
 "hfovMin": "135%",
 "id": "panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FA620C2C_E0C1_A4E7_41EA_DC72818DAE50"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 95.2,
   "distance": 1,
   "backwardYaw": -26.75,
   "panorama": "this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_34F3062B_26CD_498D_41C2_C615F0245518",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1684.6,
   "x": 2894.58
  }
 ],
 "thumbnailUrl": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0617A2C1_273F_4EFC_41B3_A3FCDBF4AB29"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.25,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3934DF85_273F_5684_41B1_88D811A3A8BB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.43,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3894014A_273F_4B8C_41B5_9BB8A2ADC064"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20221010_222143_367",
 "hfovMin": "135%",
 "id": "panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DC968B85_C556_07FD_4192_714EB0C212F5",
  "this.overlay_DC8117D3_C552_0F16_41DE_D265214B81C2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.37,
   "distance": 1,
   "backwardYaw": 178.24,
   "panorama": "this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.8,
   "distance": 1,
   "backwardYaw": 11.83,
   "panorama": "this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -125.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_06090E4D_273F_5985_41B7_A25114A1514D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3943CF95_273F_5684_4199_EE4E3425A74C"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 42,
 "horizontalAlign": "center",
 "id": "IconButton_EABF2F1F_E673_20AB_41A6_0DCCBEDB3785",
 "backgroundOpacity": 0,
 "width": 42,
 "class": "IconButton",
 "paddingRight": 0,
 "right": "4.53%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "bottom": "3.58%",
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EABF2F1F_E673_20AB_41A6_0DCCBEDB3785.png",
 "data": {
  "name": "IconButton13323"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 42
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32F37053_26C3_499C_41B9_8A68C41B55C5",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "class": "Container",
 "layout": "absolute",
 "paddingRight": 0,
 "right": "1.18%",
 "width": "19.475%",
 "children": [
  "this.MapViewer",
  "this.DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "3.11%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "height": "21.151%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container9746"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "shadow": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "UIComponent24624"
 },
 "paddingBottom": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage24625"
 },
 "paddingBottom": 0,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "class": "CloseButton",
 "layout": "horizontal",
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "top": 10,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "paddingBottom": 5,
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "shadow": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "CloseButton24626"
 },
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6, this.camera_06B4B34E_273F_4F87_4164_14A2DC13370E); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.28,
   "hfov": 16.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C08357_26C2_CF85_41B2_EC5F7EE038E3",
   "pitch": -11.45,
   "yaw": 54.28,
   "hfov": 16.38,
   "distance": 100
  }
 ],
 "id": "overlay_D219A4AC_C552_0132_41E6_9D20BAAA09FA",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733, this.camera_06C2F35E_273F_4F87_41AA_802BA2BADF38); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.32,
   "hfov": 20,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C05357_26C2_CF85_41AF_13CDFF339943",
   "pitch": -15.23,
   "yaw": -20.32,
   "hfov": 20,
   "distance": 100
  }
 ],
 "id": "overlay_DC0243C4_C552_0772_41DC_02A20CF2840D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E, this.camera_3951DFB4_273F_5684_41B2_72371116F777); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.21,
   "hfov": 20.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C90357_26C2_CF85_41AB_5C60366304E5",
   "pitch": -15.55,
   "yaw": -4.21,
   "hfov": 20.27,
   "distance": 100
  }
 ],
 "id": "overlay_DAB30AFE_C532_010E_41B6_26757BECC320",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA, this.camera_3948FFA5_273F_5685_41BA_B3EB7F5595B8); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.47,
   "hfov": 18.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C8A357_26C2_CF85_419F_C3EE493D574C",
   "pitch": -26.59,
   "yaw": 170.47,
   "hfov": 18.81,
   "distance": 100
  }
 ],
 "id": "overlay_E76E6D9D_C532_0312_41E1_0D30F5A40A66",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526, this.camera_066D930F_273F_4F84_4184_C76B5756AE4B); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.68,
   "hfov": 20.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D19367_26C2_CF85_419A_DA9F01EA9A0A",
   "pitch": -15.95,
   "yaw": -12.68,
   "hfov": 20.45,
   "distance": 50
  }
 ],
 "id": "overlay_C3884D37_E0C0_A4E1_41E9_0CE90F3B5505",
 "data": {
  "label": "Arrow 05b Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858, this.camera_065C9300_273F_4F7B_41AF_D8F03394CDA8); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.9,
   "hfov": 22.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.47
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D10367_26C2_CF85_41C2_9E19E26B52EB",
   "pitch": -33.47,
   "yaw": 166.9,
   "hfov": 22.18,
   "distance": 100
  }
 ],
 "id": "overlay_C31CF668_E0C0_A56F_41C2_873C83F960BD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8, this.camera_05736409_273F_498C_41C0_8B5BE9FC6720); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.71,
   "hfov": 19.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D45367_26C2_CF85_4125_6D7D484657E4",
   "pitch": -24.14,
   "yaw": -8.71,
   "hfov": 19.2,
   "distance": 100
  }
 ],
 "id": "overlay_F7B3D0FF_E0CF_FD61_41E1_9C836227EED0",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C, this.camera_0555D3DB_273F_4E8D_41B1_847199C18BA4); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.66,
   "hfov": 19.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D3D367_26C2_CF85_41C0_C20EB0FBAC1C",
   "pitch": -22.91,
   "yaw": -96.66,
   "hfov": 19.38,
   "distance": 100
  }
 ],
 "id": "overlay_F61B736D_E0C0_E361_41EB_394AD750B728",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3, this.camera_056293EA_273F_4E8C_41A4_8135FE8B6C7B); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.57,
   "hfov": 22.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D34367_26C2_CF85_41C0_EF7F59FD3A9F",
   "pitch": -24.49,
   "yaw": 178.57,
   "hfov": 22.34,
   "distance": 100
  }
 ],
 "id": "overlay_CBAFC517_E39A_980C_41E4_EF120C742064",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.63,
   "hfov": 25.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D2E367_26C2_CF85_41AF_097ADAC6CB5E",
   "pitch": -23.93,
   "yaw": 78.63,
   "hfov": 25.59,
   "distance": 100
  }
 ],
 "id": "overlay_C95A25EF_E3AB_B81C_41D3_F4C97063FAEE",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.1,
   "hfov": 66.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 130,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.88
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 1291,
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.88,
   "yaw": 81.1,
   "hfov": 66.33,
   "distance": 50
  }
 ],
 "id": "overlay_3A15567F_35DB_84A4_41C9_02DB61F8F089",
 "data": {
  "label": "Plaza Masjid Agung Banten"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C, this.camera_39C33060_273F_49BC_41BF_D9195EE0449F); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.94,
   "hfov": 19.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D03367_26C2_CF85_41C0_792B5FB3AC83",
   "pitch": -23.73,
   "yaw": -0.94,
   "hfov": 19.26,
   "distance": 100
  }
 ],
 "id": "overlay_C03AC909_E0C0_ECA1_41E7_22086A177944",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8, this.camera_39D7A070_273F_499B_41B3_507E402581E5); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.61,
   "hfov": 19.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.55
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DFB367_26C2_CF85_419F_0823A06D9563",
   "pitch": -24.55,
   "yaw": 86.61,
   "hfov": 19.14,
   "distance": 100
  }
 ],
 "id": "overlay_C17EFF85_E0C1_E3A1_41C1_23DBCB9CC00C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED, this.camera_39CD6060_273F_49BC_419A_E638212AB159); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.77,
   "hfov": 19.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DF2367_26C2_CF85_41B7_2DA93AED8EDD",
   "pitch": -36,
   "yaw": -142.77,
   "hfov": 19.86,
   "distance": 50
  }
 ],
 "id": "overlay_C0497581_E0C0_A7A1_41E1_55D25137190E",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.77,
   "hfov": 47.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 929,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9,
   "yaw": 1.77,
   "hfov": 47.27,
   "distance": 50
  }
 ],
 "id": "overlay_254C9F86_35DE_8464_41B6_C29F6FDEB4B3",
 "data": {
  "label": "Masuk Masjid "
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9, this.camera_39E1E07F_273F_4984_419F_6091BE55F028); this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.59,
   "hfov": 18.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.74
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D80367_26C2_CF85_4191_0DAABBFDC334",
   "pitch": -25.74,
   "yaw": 163.59,
   "hfov": 18.43,
   "distance": 100
  }
 ],
 "id": "overlay_CF04489F_E3BB_A83C_41D8_936BB719C7EE",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3, this.camera_39EA108F_273F_4A85_418B_CD888624C040); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.2,
   "hfov": 17.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A76367_26C2_CF85_4173_C4E100ED4F4E",
   "pitch": -23.8,
   "yaw": 151.2,
   "hfov": 17.47,
   "distance": 50
  }
 ],
 "id": "overlay_C82D5F42_E3BA_E804_41E7_D9D1DA865217",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0, this.camera_065B6E9B_273F_568C_41B8_C6F0DDA76786); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.23,
   "hfov": 16.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CAB357_26C2_CF85_41BA_7C490F4ACFB4",
   "pitch": -14.69,
   "yaw": 101.23,
   "hfov": 16.9,
   "distance": 100
  }
 ],
 "id": "overlay_DBDE771D_C536_0F12_41DB_C779D9908CBB",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E, this.camera_0669DEAB_273F_568D_41BF_F90EB1FEDEBE); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.66,
   "hfov": 19.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CA5357_26C2_CF85_41B1_5433EC9B7260",
   "pitch": -19.23,
   "yaw": -105.66,
   "hfov": 19.87,
   "distance": 100
  }
 ],
 "id": "overlay_DBC7BCDC_C532_0112_41E5_850AFEC0BA00",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2420.68,
  "y": 1167.87,
  "width": 815.46,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 429,
     "height": 436
    }
   ],
   "class": "ImageResource"
  },
  "height": 829.62
 },
 "map": {
  "width": 815.46,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_37A5B492_26CD_CA9F_41C3_4D5497FD74A4_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1167.87,
  "x": 2420.68,
  "offsetY": 0,
  "height": 829.62,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_3E3F50FC_26C5_4A84_41B9_95882B5101F0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E, this.camera_07D18283_273F_497D_41C2_B7138F5A04DA); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.98,
   "hfov": 24.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D6C357_26C2_CF85_41B0_E2DC3026A7AF",
   "pitch": -12.23,
   "yaw": 96.98,
   "hfov": 24.26,
   "distance": 50
  }
 ],
 "id": "overlay_3E265E9A_35BD_846C_41C6_4251C368FED7",
 "data": {
  "label": "Arrow 05b Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3, this.camera_07DFA283_273F_497D_41B3_00A2ABAA2576); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.61,
   "hfov": 19.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D67367_26C2_CF85_41B5_E417963A3470",
   "pitch": -27.78,
   "yaw": -12.61,
   "hfov": 19.35,
   "distance": 100
  }
 ],
 "id": "overlay_3E268E9A_35BD_846C_4186_665DCF9270D1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA, this.camera_078DE244_273F_4984_41B7_87202891E060); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.39,
   "hfov": 19.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CAD357_26C2_CF85_4184_87D3893B1CAC",
   "pitch": -19.72,
   "yaw": -94.39,
   "hfov": 19.81,
   "distance": 100
  }
 ],
 "id": "overlay_D0C5ADA3_C56E_0336_41D4_D85EE2E1CFC6",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2, this.camera_079B8244_273F_4984_41B2_2D10796AEA4C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.59,
   "hfov": 25.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CA7357_26C2_CF85_41A9_A274A008F417",
   "pitch": -28.35,
   "yaw": 170.59,
   "hfov": 25.92,
   "distance": 100
  }
 ],
 "id": "overlay_D9288CE6_C52E_013E_41E1_BF0C5CF89286",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_D191BA22_E3AB_E804_41CB_1D1A7EFBC463, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D7981383_E395_9804_41A1_CD53ABA1064F, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.88,
   "hfov": 14.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.61
  }
 ],
 "items": [
  {
   "yaw": -52.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 246,
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.61,
   "hfov": 14.11
  }
 ],
 "id": "overlay_D018B6AE_E3AB_981C_41D0_C412BEE7E222",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2519.06,
  "y": 1195.47,
  "width": 730.52,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_375C1E92_26CD_D69C_41B6_697AF539CCD2_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 384,
     "height": 362
    }
   ],
   "class": "ImageResource"
  },
  "height": 688.06
 },
 "map": {
  "width": 730.52,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_375C1E92_26CD_D69C_41B6_697AF539CCD2_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1195.47,
  "x": 2519.06,
  "offsetY": 0,
  "height": 688.06,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_3EB3DD49_26C6_BB8C_41B7_184D3B22B586",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733, this.camera_06B0EEE9_273F_568C_41BE_A5A8891B6E6C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.11,
   "hfov": 20.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CED357_26C2_CF85_41C1_0EC6E884FE86",
   "pitch": -17.18,
   "yaw": 19.11,
   "hfov": 20.1,
   "distance": 100
  }
 ],
 "id": "overlay_DD9F6EBB_C556_0116_41E0_281141F3327F",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7, this.camera_06A26EDA_273F_568F_41BD_579AD74C0C3F); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.32,
   "hfov": 15.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CE9357_26C2_CF85_4193_BB2005F12A2E",
   "pitch": -12.21,
   "yaw": -84.32,
   "hfov": 15.58,
   "distance": 100
  }
 ],
 "id": "overlay_DC005417_C556_011E_41CA_9A09A1DEDCAD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "90.441%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40, this.camera_39FEB09F_273F_4A85_41B3_7B8593450D0A); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.93,
   "hfov": 21.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D97367_26C2_CF85_41B3_22B5319DA087",
   "pitch": -13.78,
   "yaw": 165.93,
   "hfov": 21.27,
   "distance": 100
  }
 ],
 "id": "overlay_F478E11A_E39A_9804_41DC_9553FD78A3A9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528, this.camera_39F7609F_273F_4A85_41B9_FD941FF77DC6); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.02,
   "hfov": 20.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D8C367_26C2_CF85_41B9_4994B7300BBA",
   "pitch": -13.15,
   "yaw": 151.02,
   "hfov": 20.51,
   "distance": 50
  }
 ],
 "id": "overlay_FB617E83_E395_A804_41B3_C005C7B54E4D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.65,
   "hfov": 21.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 372,
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.48,
   "yaw": 141.65,
   "hfov": 21.38,
   "distance": 50
  }
 ],
 "id": "overlay_3A16F616_35C6_8464_41C2_19A27B5C410B",
 "data": {
  "label": "Keluar Makam"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.08,
   "hfov": 30.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 542,
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98,
   "yaw": 175.08,
   "hfov": 30.73,
   "distance": 50
  }
 ],
 "id": "overlay_25CDBAEA_35C6_8DAC_41C3_FAB4939FD96E",
 "data": {
  "label": "Makam Lebih Dalam"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528, this.camera_382A60DD_273F_4A84_41B6_2E30183C4EFA); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.43,
   "hfov": 20.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DCE367_26C2_CF85_41BC_F46F6EF38304",
   "pitch": -10.48,
   "yaw": -4.43,
   "hfov": 20.69,
   "distance": 100
  }
 ],
 "id": "overlay_F1C362F0_E3B5_B804_41C2_ADFBBADAAD25",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C, this.camera_383720DD_273F_4A84_418B_03D50EB9BFCE); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.7,
   "hfov": 35.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DC6367_26C2_CF85_41AC_2F3D05F2D6DF",
   "pitch": -24.24,
   "yaw": 177.7,
   "hfov": 35.95,
   "distance": 100
  }
 ],
 "id": "overlay_F7383719_E3AA_B804_418F_5EDC20438AF2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.16,
   "hfov": 47.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 872,
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.93,
   "yaw": -1.16,
   "hfov": 47.95,
   "distance": 50
  }
 ],
 "id": "overlay_3A67604B_35DA_BCEC_41B9_D2BA2BBD0C1F",
 "data": {
  "label": "Masuk Masjid"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582, this.camera_063202E1_273F_4EBD_41BE_AE7E9D7F99FB); this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.18,
   "hfov": 19.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AED376_26C2_CF84_4194_7DFCE8BDC014",
   "pitch": -19.54,
   "yaw": -22.18,
   "hfov": 19.83,
   "distance": 100
  }
 ],
 "id": "overlay_F8D62FEB_E3EB_E804_41DC_F874C270E093",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3, this.camera_0640E2E1_273F_4EBD_41BB_CC0C25939E4E); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.03,
   "hfov": 15.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AE2376_26C2_CF84_41BF_6E107F17CA56",
   "pitch": -10.64,
   "yaw": 55.03,
   "hfov": 15.55,
   "distance": 100
  }
 ],
 "id": "overlay_FD1F7873_E3F5_A804_41CC_0EE221BF1993",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.39,
   "hfov": 19.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33ADB376_26C2_CF84_41B6_800B712D6752",
   "pitch": -20.09,
   "yaw": 167.39,
   "hfov": 19.76,
   "distance": 100
  }
 ],
 "id": "overlay_E66AAFB6_E94A_D734_41DE_E833A5431199",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C, this.camera_062502D1_273F_4E9D_415B_54D4E9944050); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.53,
   "hfov": 19.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AD2376_26C2_CF84_41B2_C0AFF9BCD41B",
   "pitch": -23.73,
   "yaw": -135.53,
   "hfov": 19.26,
   "distance": 100
  }
 ],
 "id": "overlay_E624F688_E946_E9DC_41DE_C851B815369C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE, this.camera_071511C7_273F_4A84_41AA_2F7A6B2E8D70); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.05,
   "hfov": 16.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A5E367_26C2_CF85_416A_A733585A07DE",
   "pitch": -17.91,
   "yaw": -106.05,
   "hfov": 16.05,
   "distance": 100
  }
 ],
 "id": "overlay_C3F8EF81_E3FD_A804_41D4_E96C8F1D7922",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324, this.camera_0709F1B8_273F_4A8B_41C2_60F1B225E26B); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.84,
   "hfov": 20.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A59367_26C2_CF85_41C2_BE41598C1466",
   "pitch": -11.04,
   "yaw": 113.84,
   "hfov": 20.65,
   "distance": 50
  }
 ],
 "id": "overlay_FD800117_E942_42AA_41D4_3EB68F8077DC",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7, this.camera_3871112B_273F_4B8C_41B2_5ED91D2F9C8A); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.93,
   "hfov": 20.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33ACA376_26C2_CF84_41C3_0E28F8870C94",
   "pitch": -12.66,
   "yaw": -84.93,
   "hfov": 20.53,
   "distance": 100
  }
 ],
 "id": "overlay_D1E0539B_E3B7_9804_41D8_005CB207CC8D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C, this.camera_07FD9E3D_273F_5984_41C1_3CD6656DFCF6); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.61,
   "hfov": 20.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D4A367_26C2_CF85_41C2_C5F1BC2028AC",
   "pitch": -16.77,
   "yaw": 104.61,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_FC89123B_E0C0_FCE1_41C0_350FBB071BC6",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692, this.camera_07FBF2A2_273F_4EBC_41B8_A77FF91AEA80); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.16,
   "hfov": 19.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D78357_26C2_CF85_41C2_5DF87BB0FC0A",
   "pitch": -18.41,
   "yaw": -11.16,
   "hfov": 19.96,
   "distance": 100
  }
 ],
 "id": "overlay_F33361A8_E0C0_BFEF_41E9_92B8BCF0339D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7, this.camera_07EDE292_273F_4E9C_41C2_087E8B2F9689); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.63,
   "hfov": 16.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D72357_26C2_CF85_4160_0260D424E3D6",
   "pitch": -19.35,
   "yaw": 177.63,
   "hfov": 16.6,
   "distance": 100
  }
 ],
 "id": "overlay_F3A4875E_E0C7_A4A3_41B4_4F63D2CAC1B6",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2, this.camera_0695CEDA_273F_568F_41B9_5E3FF6821BC1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.44,
   "hfov": 20.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C31357_26C2_CF85_4196_187CF95ED618",
   "pitch": -9.27,
   "yaw": 87.44,
   "hfov": 20.76,
   "distance": 100
  }
 ],
 "id": "overlay_D7617E2E_C572_010E_41D5_C4C3FCB07D85",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9, this.camera_0676AEBA_273F_568C_41B8_A79007BCC936); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.15,
   "hfov": 24.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.68
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C2B357_26C2_CF85_41C2_83CD0AEBA681",
   "pitch": -20.68,
   "yaw": -176.15,
   "hfov": 24.29,
   "distance": 100
  }
 ],
 "id": "overlay_D48073BE_C572_070E_41E2_6E901A854806",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7, this.camera_06870ECA_273F_568F_41B7_611E4523A254); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.46,
   "hfov": 24.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C26357_26C2_CF85_41BC_8F0C50D3F48C",
   "pitch": -6.66,
   "yaw": 3.46,
   "hfov": 24.39,
   "distance": 100
  }
 ],
 "id": "overlay_CCCFF185_E3BD_780C_41E6_5CA219E165BD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB, this.camera_384AC0FC_273F_4A84_419A_8468555E5A35); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.35,
   "hfov": 28.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.98
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AFD376_26C2_CF84_41AE_7AD6E3E6CFD2",
   "pitch": -13.98,
   "yaw": -107.35,
   "hfov": 28.35,
   "distance": 100
  }
 ],
 "id": "overlay_FFDD200C_E3EA_B81C_41BD_86B91BF59CFA",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35, this.camera_384020ED_273F_4A85_41BE_13C91A71F2E6); this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.56,
   "hfov": 20.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AF5376_26C2_CF84_41C0_8562AC2C01D5",
   "pitch": -10.18,
   "yaw": -38.56,
   "hfov": 20.73,
   "distance": 100
  }
 ],
 "id": "overlay_FE2C7EF9_E3F5_6804_41C3_8E7F48B850D1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22, this.camera_387A612B_273F_4B8C_41A8_16BB3A4CE928); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.41,
   "hfov": 19.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C69357_26C2_CF85_41C1_F4BFF8C0AD95",
   "pitch": -20.29,
   "yaw": 69.41,
   "hfov": 19.73,
   "distance": 100
  }
 ],
 "id": "overlay_CB1D2542_C552_0376_41E5_E6D25F577851",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7, this.camera_3889013B_273F_4B8D_41A7_D82E235402A4); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.22,
   "hfov": 19.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C60357_26C2_CF85_41B3_CB53E4C48DA8",
   "pitch": -21.52,
   "yaw": -5.22,
   "hfov": 19.57,
   "distance": 100
  }
 ],
 "id": "overlay_ED150C43_E0DF_E4A1_41E2_74F8686633DD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.15,
   "hfov": 45.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 135,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 844,
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.24,
   "yaw": -3.15,
   "hfov": 45.95,
   "distance": 50
  }
 ],
 "id": "overlay_3A5C0540_35BB_84DC_4176_960068536EF8",
 "data": {
  "label": "Masuk Masjid Agung Banten"
 }
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_07963D82_273F_5B7F_41A5_EBEE7855E8FA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "media": "this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3",
 "id": "PanoramaPlayListItem_07963D82_273F_5B7F_41A5_EBEE7855E8FA",
 "camera": "this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_079A5D92_273F_5A9F_41BB_053730ACDED8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
 "media": "this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7",
 "id": "PanoramaPlayListItem_079A5D92_273F_5A9F_41BB_053730ACDED8",
 "camera": "this.panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_079C2D92_273F_5A9F_41BA_1E8E586D49BC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
 "media": "this.panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41",
 "id": "PanoramaPlayListItem_079C2D92_273F_5A9F_41BA_1E8E586D49BC",
 "camera": "this.panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_07A1ED92_273F_5A9F_419A_4A1B09DB30D9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 36)",
 "media": "this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528",
 "id": "PanoramaPlayListItem_07A1ED92_273F_5A9F_419A_4A1B09DB30D9",
 "camera": "this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_07A01D92_273F_5A9F_41B7_CCB272374825, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 36, 37)",
 "media": "this.panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99",
 "id": "PanoramaPlayListItem_07A01D92_273F_5A9F_41B7_CCB272374825",
 "camera": "this.panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_07A0ED92_273F_5A9F_41B7_BE9499403DF4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 37, 38)",
 "media": "this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3",
 "id": "PanoramaPlayListItem_07A0ED92_273F_5A9F_41B7_BE9499403DF4",
 "camera": "this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_07A4ADA1_273F_5ABC_4188_0F8B218F3CB9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 47, 48)",
 "media": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35",
 "id": "PanoramaPlayListItem_07A4ADA1_273F_5ABC_4188_0F8B218F3CB9",
 "camera": "this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_camera"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922, this.camera_393D7F95_273F_5684_41B5_C16727F5F5AC); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.83,
   "hfov": 20.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CCA357_26C2_CF85_41AB_0B1D4757B9FD",
   "pitch": -17.3,
   "yaw": 11.83,
   "hfov": 20.09,
   "distance": 100
  }
 ],
 "id": "overlay_DFA88950_C552_0313_41E0_C9629967ECC3",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA, this.camera_3943CF95_273F_5684_4199_EE4E3425A74C); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.9,
   "hfov": 20.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CC5357_26C2_CF85_41BA_9EE758A56D66",
   "pitch": -14.21,
   "yaw": -75.9,
   "hfov": 20.4,
   "distance": 100
  }
 ],
 "id": "overlay_DE8AEE61_C552_0132_41DE_940DBFCF9411",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE, this.camera_07DABDEF_273F_5A84_4173_8DBFAF5D27C2); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.16,
   "hfov": 18.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CBF357_26C2_CF85_4190_E61746B3C066",
   "pitch": -27.33,
   "yaw": -11.16,
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_D1EE1F69_C572_7F32_41BD_344CD677EBD2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260, this.camera_07E4DE0F_273F_5985_41BF_31FE2FED31B4); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.47,
   "hfov": 15.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CB9357_26C2_CF85_41C1_8C7D91D382E9",
   "pitch": -13.17,
   "yaw": -104.47,
   "hfov": 15.52,
   "distance": 100
  }
 ],
 "id": "overlay_D002000E_C56E_010E_41C4_8E12FE617C16",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E, this.camera_07F02E1E_273F_59B7_41C0_D4979490AB20); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.06,
   "hfov": 17.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CB2357_26C2_CF85_41B1_80D7B1839000",
   "pitch": -31.53,
   "yaw": 80.06,
   "hfov": 17.93,
   "distance": 100
  }
 ],
 "id": "overlay_DEA96A05_C52E_00F2_41E4_0A3038F5B4D1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2, this.camera_06A7F33E_273F_4F84_41B2_9659AD59084A); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1,
   "hfov": 12.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CE3357_26C2_CF85_41BD_A0BB2CEFAF02",
   "pitch": -9.35,
   "yaw": -1,
   "hfov": 12.32,
   "distance": 100
  }
 ],
 "id": "overlay_DC2696FB_C556_0116_41E0_C8E30B1C92A5",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922, this.camera_0699332F_273F_4F85_41BB_8A11FE78F3F1); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.24,
   "hfov": 18.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CDD357_26C2_CF85_4164_B50CE72296A1",
   "pitch": -28.77,
   "yaw": 178.24,
   "hfov": 18.46,
   "distance": 100
  }
 ],
 "id": "overlay_DC4569F6_C556_031E_41CD_CA1ECCD9717E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2398.38,
  "y": 1527.79,
  "width": 914.55,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 481,
     "height": 343
    }
   ],
   "class": "ImageResource"
  },
  "height": 652.67
 },
 "map": {
  "width": 914.55,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_34D9B098_26CD_4A8C_4172_A9BD9FD7D00A_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1527.79,
  "x": 2398.38,
  "offsetY": 0,
  "height": 652.67,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "Open Entrance",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_31BD7AE3_26C2_DEBD_41AD_B97229E1C78C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB, this.camera_064D5E9B_273F_568C_41AB_BE7DCCA151FA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.16,
   "hfov": 20.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AC3376_26C2_CF84_41C3_24AFAE9ECC15",
   "pitch": -10.24,
   "yaw": -94.16,
   "hfov": 20.7,
   "distance": 100
  }
 ],
 "id": "overlay_CD147A0B_E3BE_A804_41E4_8E453235FA13",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C89F714D_E3B6_981C_41CB_005250412720, this.camera_06343E7C_273F_598B_41BE_C072A65E5235); this.mainPlayList.set('selectedIndex', 52)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.05,
   "hfov": 20.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33ABC376_26C2_CF84_41A0_F5BE3A8E887C",
   "pitch": -10.4,
   "yaw": 85.05,
   "hfov": 20.69,
   "distance": 100
  }
 ],
 "id": "overlay_CC395DF3_E3BA_A804_41E6_CFB64F2E2A56",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC802CD9_E3B7_6804_41EA_774204EC6934, this.camera_06419E8B_273F_568C_41B9_6297C7D81F93); this.mainPlayList.set('selectedIndex', 48)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.03,
   "hfov": 20.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.88
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AB5376_26C2_CF84_41BD_64CAF29D705B",
   "pitch": -13.88,
   "yaw": -167.03,
   "hfov": 20.45,
   "distance": 100
  }
 ],
 "id": "overlay_D1979B36_E3BB_E80C_41EC_3F1190D03F34",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_D04BE2D6_E3B5_980C_41E8_EAEAB79CD481, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D75023F1_E395_9804_41DC_A5E431F69C1D, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.82,
   "hfov": 12.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.26
  }
 ],
 "items": [
  {
   "yaw": 0.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 207,
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.26,
   "hfov": 12.22
  }
 ],
 "id": "overlay_D22981D9_E3B6_F804_41D7_A4BA2CFC2957",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858, this.camera_397BD002_273F_497C_41BB_F63088F3CDC1); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.75,
   "hfov": 19.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D0D367_26C2_CF85_4191_950EB44001CD",
   "pitch": -23.32,
   "yaw": -1.75,
   "hfov": 19.32,
   "distance": 100
  }
 ],
 "id": "overlay_FD5F0673_E0C0_6561_41E8_716D8100F6C1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202, this.camera_39858012_273F_499C_41B7_20786F2DBA25); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.07,
   "hfov": 27.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D05367_26C2_CF85_41A7_CA438CF41B64",
   "pitch": -33.37,
   "yaw": 178.07,
   "hfov": 27.67,
   "distance": 100
  }
 ],
 "id": "overlay_CFD3BE1E_E397_E83C_41D2_2D934CEB2AF6",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB, this.camera_3862611C_273F_4B8B_41C0_A03E47D2A0EE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.75,
   "hfov": 19.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C3D357_26C2_CF85_41B9_3D1514407941",
   "pitch": -18.82,
   "yaw": 2.75,
   "hfov": 19.91,
   "distance": 100
  }
 ],
 "id": "overlay_D66BAAC1_C56E_0172_41BF_7B480D99BD1E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD, this.camera_3856310C_273F_4B8B_41BD_1CC9D236CCB4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.15,
   "hfov": 20.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C37357_26C2_CF85_41BA_F5A0D757E68B",
   "pitch": -12.22,
   "yaw": -126.15,
   "hfov": 20.56,
   "distance": 50
  }
 ],
 "id": "overlay_CF21ECD4_E3AD_A83C_41E1_2D4FECABBB46",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394, this.camera_39A27031_273F_499C_41B1_43EB3BB073F1); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.34,
   "hfov": 13.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DBC367_26C2_CF85_41C2_3F339D0D41FE",
   "pitch": -17.84,
   "yaw": -65.34,
   "hfov": 13.53,
   "distance": 100
  }
 ],
 "id": "overlay_F6840BF6_E3AE_E80C_41B4_2326713BD674",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99, this.camera_39982022_273F_49BF_4198_B738B756A88D); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.7,
   "hfov": 6.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DB5367_26C2_CF85_41BA_9C8BDF70DADB",
   "pitch": -0.71,
   "yaw": -3.7,
   "hfov": 6.94,
   "distance": 100
  }
 ],
 "id": "overlay_F75987E6_E3AD_780C_41E0_BC78599AD2E7",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3, this.camera_398E0012_273F_499C_41B1_9A910F23EDB8); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.52,
   "hfov": 12.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DAD367_26C2_CF85_4182_2DE56DC9B86D",
   "pitch": -14.78,
   "yaw": 82.52,
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "id": "overlay_F5E757EB_E395_F804_41B2_DB6FEFF67CBA",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.86,
   "hfov": 23.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 404,
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.11,
   "yaw": -0.86,
   "hfov": 23.84,
   "distance": 50
  }
 ],
 "id": "overlay_3635A4C3_26B9_3868_41C0_55E944410039",
 "data": {
  "label": "Masuk ke Dalam Masjid"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.06,
   "hfov": 35.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 634,
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29,
   "yaw": 83.06,
   "hfov": 35.28,
   "distance": 50
  }
 ],
 "id": "overlay_3A7B19B9_35DA_8FAF_41C0_6DAE47C92675",
 "data": {
  "label": "Masuk Makam"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582, this.camera_39ACA041_273F_49FD_41BD_E72811D7913B); this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.15,
   "hfov": 19.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A17376_26C2_CF84_4173_C68E4EE29F69",
   "pitch": -22.16,
   "yaw": 80.15,
   "hfov": 19.95,
   "distance": 100
  }
 ],
 "id": "overlay_FE71E484_E3F6_F80C_41D3_DE2B928A34C2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119, this.camera_39B6F050_273F_499C_41B7_9A295BC94079); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.43,
   "hfov": 14.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A0C376_26C2_CF84_41B0_948B7C1C045C",
   "pitch": -17.54,
   "yaw": -80.43,
   "hfov": 14.62,
   "distance": 100
  }
 ],
 "id": "overlay_CB73BFD3_E3EE_E804_41DC_4A018B662F7B",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.31,
   "hfov": 20,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A05376_26C2_CF84_41B8_9CC373723800",
   "pitch": -18.25,
   "yaw": -35.31,
   "hfov": 20,
   "distance": 100
  }
 ],
 "id": "overlay_CB2F7298_E3ED_9804_41D3_EA25BF8A5697",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2597.27,
  "y": 1322.88,
  "width": 624.35,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_37A6FCA4_26CD_BA84_41AD_981A7493EA81_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 328,
     "height": 328
    }
   ],
   "class": "ImageResource"
  },
  "height": 624.35
 },
 "map": {
  "width": 624.35,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_37A6FCA4_26CD_BA84_41AD_981A7493EA81_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1322.88,
  "x": 2597.27,
  "offsetY": 0,
  "height": 624.35,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_3036F6EE_26C5_D687_41B9_E128CBBC2CD0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3E299E9A_35BD_846C_4177_500B8C56F692, this.camera_38A3115A_273F_4B8C_41B5_67FEE6207B34); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.27,
   "hfov": 26.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D5E367_26C2_CF85_4190_06391F039CDB",
   "pitch": -30.57,
   "yaw": -86.27,
   "hfov": 26.46,
   "distance": 100
  }
 ],
 "id": "overlay_F5125CAC_E0C0_A5E7_4167_2D6029595931",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202, this.camera_3894014A_273F_4B8C_41B5_9BB8A2ADC064); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.26,
   "hfov": 20.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.88
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D58367_26C2_CF85_41B6_45844D45C271",
   "pitch": -15.88,
   "yaw": 3.26,
   "hfov": 20.24,
   "distance": 100
  }
 ],
 "id": "overlay_F516B3AE_E0C1_A3E3_41D4_E6B18F8D3333",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394, this.camera_051BA3AC_273F_4E8B_4197_5C86E2B504E2); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3,
   "hfov": 18.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DE9367_26C2_CF85_41BC_09298D05040F",
   "pitch": -25.69,
   "yaw": 3,
   "hfov": 18.96,
   "distance": 100
  }
 ],
 "id": "overlay_EC690AB3_E3B7_A804_41E7_AF01ED20AC25",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEE221_E0C0_DCE0_41B9_496448121858, this.camera_06FFA38C_273F_4E84_41B1_C5436699CABC); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.51,
   "hfov": 30.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DE0367_26C2_CF85_41C3_47371C6B24F0",
   "pitch": -35.43,
   "yaw": 173.51,
   "hfov": 30.49,
   "distance": 100
  }
 ],
 "id": "overlay_C9DBFCA0_E395_6804_41E6_C17CA44E7E21",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35, this.camera_050AE39C_273F_4E84_41A0_FB467790B734); this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.28,
   "hfov": 19.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DD8367_26C2_CF85_415F_B106BBB06FFF",
   "pitch": -25.18,
   "yaw": 86.28,
   "hfov": 19.04,
   "distance": 100
  }
 ],
 "id": "overlay_F98602A7_E3EE_980C_41D9_3193CC07C74C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 37.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 741,
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.44,
   "yaw": 90,
   "hfov": 37.04,
   "distance": 50
  }
 ],
 "id": "overlay_295AD3D7_26BB_3868_4189_39BD1699E0F4",
 "data": {
  "label": "Menuju Plaza Masjid Agung Banten"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40, this.camera_39678FD4_273F_569B_416D_49834A2AC5E0); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.26,
   "hfov": 11.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AA6376_26C2_CF84_41A6_C252144B0820",
   "pitch": -9.57,
   "yaw": 132.26,
   "hfov": 11.27,
   "distance": 100
  }
 ],
 "id": "overlay_CDF92625_E3BE_980C_41E2_0D6DA9191A66",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528, this.camera_07C39273_273F_499C_41BF_85444AE16BFC); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.51,
   "hfov": 7.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33DA1367_26C2_CF85_41BD_766BA1442587",
   "pitch": -0.62,
   "yaw": 97.51,
   "hfov": 7.43,
   "distance": 100
  }
 ],
 "id": "overlay_F5BE8A99_E395_6804_41CF_F6569D5D6DB3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.18,
   "hfov": 22.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 382,
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.85,
   "yaw": 99.18,
   "hfov": 22.57,
   "distance": 50
  }
 ],
 "id": "overlay_296E1BE1_26A9_2828_419F_9D89BD57CE33",
 "data": {
  "label": "Keluar Masjid"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB, this.camera_0547B3CB_273F_4E8D_41C3_7318335AB59B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.11,
   "hfov": 20.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C1C357_26C2_CF85_419F_3E8884DFEEDF",
   "pitch": -16.77,
   "yaw": 28.11,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_D48EBF3B_C572_3F16_41D5_B0111881420A",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC, this.camera_053683BB_273F_4E8C_41C2_CC02CCEB8CD7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.02,
   "hfov": 17.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.05
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C16357_26C2_CF85_4185_F9A679C05B68",
   "pitch": -18.05,
   "yaw": 118.02,
   "hfov": 17.5,
   "distance": 100
  }
 ],
 "id": "overlay_D6750BBF_C572_070E_41E8_201C0EE08D97",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260, this.camera_052823BB_273F_4E8C_41B3_5CCA1E7E6148); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.25,
   "hfov": 19.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C12357_26C2_CF85_41C0_2B04F5E2BABB",
   "pitch": -22.09,
   "yaw": -60.25,
   "hfov": 19.49,
   "distance": 100
  }
 ],
 "id": "overlay_D9E1D483_C52E_01F6_41C5_DD03C1C8AA0F",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3, this.camera_06E0636D_273F_4F84_41B1_7BB7F06AF721); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.38,
   "hfov": 20.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A51376_26C2_CF84_4191_016002937456",
   "pitch": -11.57,
   "yaw": -105.38,
   "hfov": 20.61,
   "distance": 100
  }
 ],
 "id": "overlay_C63EA5A8_E3EB_7804_41DE_1730B9C232F1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119, this.camera_06D3436D_273F_4F84_4140_F03D29368E38); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.26,
   "hfov": 15.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A48376_26C2_CF84_418A_E7A1C4F6DCD0",
   "pitch": -8.6,
   "yaw": 56.26,
   "hfov": 15.02,
   "distance": 100
  }
 ],
 "id": "overlay_C6462ADA_E3EE_E804_41EA_8B1230704254",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE, this.camera_06F1137D_273F_4F85_41BC_E2B432E13597); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.33,
   "hfov": 16.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.8
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A3C376_26C2_CF84_41BD_2B36E7FAE231",
   "pitch": -10.8,
   "yaw": 136.33,
   "hfov": 16.61,
   "distance": 50
  }
 ],
 "id": "overlay_FAD4CB17_E941_C6AA_41BB_FF3DA69C493D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35, this.camera_072021D7_273F_4A84_41B2_4C0DB76EBA61); this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.42,
   "hfov": 14.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A34376_26C2_CF84_41C3_5547D42A743E",
   "pitch": -8.76,
   "yaw": -1.42,
   "hfov": 14.69,
   "distance": 100
  }
 ],
 "id": "overlay_FED9A0AE_E3F6_B81C_41C2_049685D6BBAB",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0, this.camera_072F11E7_273F_4A85_4199_59E5CCE4999A); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.76,
   "hfov": 21.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A2C376_26C2_CF84_41C0_ABAF13CB07A3",
   "pitch": -16.37,
   "yaw": 149.76,
   "hfov": 21.75,
   "distance": 100
  }
 ],
 "id": "overlay_C66832D4_E3F5_F80C_41BB_8912004E734E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC, this.camera_060982B2_273F_4E9F_41B7_E83C69953FAA); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.97,
   "hfov": 19.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C44357_26C2_CF85_41B5_928F40B7746B",
   "pitch": -20.45,
   "yaw": 174.97,
   "hfov": 19.71,
   "distance": 100
  }
 ],
 "id": "overlay_D45B4B91_C56E_0715_41B8_C9A698DFAF01",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9, this.camera_0617A2C1_273F_4EFC_41B3_A3FCDBF4AB29); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.3,
   "hfov": 20.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C3E357_26C2_CF85_41A4_8C835849A45A",
   "pitch": -15.55,
   "yaw": -8.3,
   "hfov": 20.27,
   "distance": 100
  }
 ],
 "id": "overlay_D793CE06_C56E_00FA_41E6_88B0AD79D774",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95, this.camera_39743FF3_273F_569D_41B8_67627353403D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.21,
   "hfov": 19.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C59357_26C2_CF85_41A8_A2335C3431CF",
   "pitch": -21.27,
   "yaw": -166.21,
   "hfov": 19.61,
   "distance": 100
  }
 ],
 "id": "overlay_CA9319BA_C552_0316_41DB_B925B434863C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC, this.camera_396CCFE3_273F_56BC_41BF_E0E9D1A054F6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.16,
   "hfov": 20.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C53357_26C2_CF85_415B_68C10BD6EEAA",
   "pitch": -16.77,
   "yaw": 12.16,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_CAAD4A8B_C552_01F6_41CD_BB6B1630A3E9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733, this.camera_395E5FD4_273F_569B_41BD_7FF17E5BCB5A); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.73,
   "hfov": 19.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C9D357_26C2_CF85_41B6_D4F2678B9AF0",
   "pitch": -18.18,
   "yaw": 95.73,
   "hfov": 19.99,
   "distance": 100
  }
 ],
 "id": "overlay_D17D0F6E_C572_3F0E_41D0_DECA64A967E4",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262, this.camera_39596FC4_273F_56FB_41BC_9AA9E1B097D3); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.41,
   "hfov": 35.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C99357_26C2_CF85_41C1_3EE2CFA6ECA9",
   "pitch": -18.27,
   "yaw": -96.41,
   "hfov": 35.77,
   "distance": 100
  }
 ],
 "id": "overlay_D108822F_C572_010E_41DD_B436AE503869",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2596.92,
  "y": 1365.7,
  "width": 772.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_3759580C_26CD_D984_41C2_354C0F792B1B_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 406,
     "height": 328
    }
   ],
   "class": "ImageResource"
  },
  "height": 624.35
 },
 "map": {
  "width": 772.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_3759580C_26CD_D984_41C2_354C0F792B1B_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 19,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1365.7,
  "x": 2596.92,
  "offsetY": 0,
  "height": 624.35,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_312A98C2_26C7_DAFC_41C0_50F025F17580",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6CF6DE_C536_010E_41E7_59982BE47262, this.camera_07A9A254_273F_4984_419A_B90D6188F602); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.9,
   "hfov": 20.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.92
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C9F357_26C2_CF85_41C2_A401A33F0AB7",
   "pitch": -11.92,
   "yaw": 89.9,
   "hfov": 20.59,
   "distance": 100
  }
 ],
 "id": "overlay_DBB943E0_C532_0732_41C7_9BBFDA53EF6C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE, this.camera_07B5D264_273F_49BB_41BE_BD7C717BFE7C); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.15,
   "hfov": 20.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C99357_26C2_CF85_41B4_1F1873E5D084",
   "pitch": -13.04,
   "yaw": -103.15,
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_DA950580_C532_03F2_41D8_7D8CFDF0BD08",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD, this.camera_061C4E5D_273F_5985_41B6_1D911ED16A5A); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.09,
   "hfov": 16.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A6E367_26C2_CF85_41BF_712A17D22AB5",
   "pitch": -13.78,
   "yaw": -29.09,
   "hfov": 16.87,
   "distance": 100
  }
 ],
 "id": "overlay_FD15F968_E3FB_6804_41E8_B27CD699957E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE, this.camera_06281E6C_273F_5984_41B6_A14C095AB4F9); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.63,
   "hfov": 20.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A68367_26C2_CF85_41C2_A5C9C335D698",
   "pitch": -23.77,
   "yaw": -95.63,
   "hfov": 20.6,
   "distance": 100
  }
 ],
 "id": "overlay_FF24CD56_E946_42AA_41E2_9D4188D7C7E2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0, this.camera_0771E225_273F_4984_41BD_36E51E5CEBE0); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.22,
   "hfov": 17.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A26376_26C2_CF84_419F_C6FDD951A0B8",
   "pitch": -8,
   "yaw": -48.22,
   "hfov": 17.17,
   "distance": 100
  }
 ],
 "id": "overlay_C7717168_E3F6_9804_41C2_DC77140941E9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB, this.camera_077FF235_273F_4985_4196_7B21BB919A2E); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.16,
   "hfov": 19.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.68
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A1F376_26C2_CF84_41A8_3F389AE84E88",
   "pitch": -21.68,
   "yaw": 12.16,
   "hfov": 19.55,
   "distance": 100
  }
 ],
 "id": "overlay_FF38026A_E95E_477A_41DA_F71C26A29A63",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2568.61,
  "y": 1330.31,
  "width": 666.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 350,
     "height": 324
    }
   ],
   "class": "ImageResource"
  },
  "height": 617.28
 },
 "map": {
  "width": 666.82,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_37A5A230_26CD_C99C_41A8_8C0EAB32C8AB_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1330.31,
  "x": 2568.61,
  "offsetY": 0,
  "height": 617.28,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_31D3BB51_26C6_DF9D_41C1_4FA41BD275C1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2490.39,
  "y": 1393.66,
  "width": 808.38,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_34F3062B_26CD_498D_41C2_C615F0245518_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 425,
     "height": 306
    }
   ],
   "class": "ImageResource"
  },
  "height": 581.89
 },
 "map": {
  "width": 808.38,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_34F3062B_26CD_498D_41C2_C615F0245518_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1394.37,
  "x": 2491.46,
  "offsetY": 0,
  "height": 581.89,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_3084BC7E_26C2_B984_41BC_6F29D1F06C5E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD, this.camera_380B50AE_273F_4A84_41BF_C9563418676A); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.78,
   "hfov": 11.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.26
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A50367_26C2_CF85_41AF_556A169D4443",
   "pitch": -8.26,
   "yaw": -51.78,
   "hfov": 11.69,
   "distance": 100
  }
 ],
 "id": "overlay_C21CF9E9_E3FE_A804_41E5_373FFCE8A055",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0, this.camera_382160CD_273F_4A84_41B5_048ED6BB3AD5); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.18,
   "hfov": 22.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A49376_26C2_CF84_41B9_BE9A4F763698",
   "pitch": -9.4,
   "yaw": 57.18,
   "hfov": 22.05,
   "distance": 100
  }
 ],
 "id": "overlay_C19825A4_E3FD_B80C_41E6_A9FA52C131DF",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324, this.camera_381460BE_273F_4A87_41BA_7957B119C0AB); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.39,
   "hfov": 16.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A59376_26C2_CF84_41A4_6EDC0DE34744",
   "pitch": -20.48,
   "yaw": -1.39,
   "hfov": 16.77,
   "distance": 100
  }
 ],
 "id": "overlay_FAD56D80_E946_3DA6_41D3_7D0C8D7FDAFD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC, this.camera_0612AE5D_273F_5985_41BD_A1290C179DBB); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.92,
   "hfov": 15.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C15357_26C2_CF85_4169_B257CE9C1818",
   "pitch": -8.65,
   "yaw": -95.92,
   "hfov": 15.28,
   "distance": 100
  }
 ],
 "id": "overlay_D3922A30_C55E_0113_416E_86A7049F001C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3, this.camera_06090E4D_273F_5985_41B7_A25114A1514D); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.3,
   "hfov": 20.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C0E357_26C2_CF85_41AB_6963835E800F",
   "pitch": -18.17,
   "yaw": 79.3,
   "hfov": 20.01,
   "distance": 100
  }
 ],
 "id": "overlay_D3B36F57_C55E_FF1E_41E4_1F718BD0F443",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF579672_C532_0116_41DA_E22B6EF26E22, this.camera_392EFF76_273F_5787_41C1_33F377EC38C9); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.39,
   "hfov": 20.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C4E357_26C2_CF85_41A8_88A2BE861158",
   "pitch": -14.32,
   "yaw": -84.39,
   "hfov": 20.39,
   "distance": 100
  }
 ],
 "id": "overlay_D5202994_C56E_0312_41CF_04C3A5835576",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD, this.camera_392A3F66_273F_5784_41BA_8C1EB16FB5FE); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.93,
   "hfov": 20.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C4B357_26C2_CF85_41C2_8AA3DD14864F",
   "pitch": -15.95,
   "yaw": 91.93,
   "hfov": 20.23,
   "distance": 100
  }
 ],
 "id": "overlay_D750CDD3_C56E_0316_41C8_3D73D707287E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED, this.camera_38FAD1A8_273F_4A8C_41A7_665AB5C00B7E); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.79,
   "hfov": 19.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D0B367_26C2_CF85_41BF_E5658D093709",
   "pitch": -23.32,
   "yaw": 103.79,
   "hfov": 19.32,
   "distance": 100
  }
 ],
 "id": "overlay_C129D771_E0C0_6361_41AC_359B516995DC",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7, this.camera_065142F0_273F_4E9C_41C1_249408F4BF37); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.27,
   "hfov": 20.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33A9E376_26C2_CF84_41A4_F50267A135BF",
   "pitch": -13.23,
   "yaw": -120.27,
   "hfov": 20.48,
   "distance": 100
  }
 ],
 "id": "overlay_D26EB0B3_E3B6_F804_41E0_DA5E16FF2BDD",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E, this.camera_0688432F_273F_4F85_41AC_5E97A0578CC7); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.16,
   "hfov": 20.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C84357_26C2_CF85_41A1_670D6B077927",
   "pitch": -17.59,
   "yaw": -11.16,
   "hfov": 20.06,
   "distance": 100
  }
 ],
 "id": "overlay_EFAE626D_E0C0_7D60_41D9_1E5D3FF2D30C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95, this.camera_067A031F_273F_4F84_419A_0D742C306AE1); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.47,
   "hfov": 15.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D7E357_26C2_CF85_41A5_0D4BB1CE98C5",
   "pitch": -16.02,
   "yaw": 169.47,
   "hfov": 15.23,
   "distance": 100
  }
 ],
 "id": "overlay_F38D1203_E0C0_BCA1_41D3_EAA809755A98",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41, this.camera_38C99179_273F_4B8C_41B0_5E5EAD7C17D7); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.75,
   "hfov": 21.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D22367_26C2_CF85_41A5_64B7F67D4307",
   "pitch": -26.63,
   "yaw": -26.75,
   "hfov": 21.94,
   "distance": 50
  }
 ],
 "id": "overlay_F890AD84_E0C1_E7A7_41E5_E101F5980857",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09, this.camera_38BAB16A_273F_4B8F_41B8_189EF78FF274); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.67,
   "hfov": 22.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D1F367_26C2_CF85_41B8_AA0E28A4DCA2",
   "pitch": -26.29,
   "yaw": 9.67,
   "hfov": 22.01,
   "distance": 50
  }
 ],
 "id": "overlay_F996DDBE_E0C0_A7E3_41CE_F48729C2E000",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202, this.camera_38AF816A_273F_4B8F_41B9_F5CF381C7054); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.39,
   "hfov": 27.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D17367_26C2_CF85_41A8_2A330911B265",
   "pitch": -19.93,
   "yaw": 174.39,
   "hfov": 27.57,
   "distance": 100
  }
 ],
 "id": "overlay_C8748FAF_E395_A81C_41E8_8F76BD04EB43",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.56,
   "hfov": 43.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 97,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 858,
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9,
   "yaw": 19.56,
   "hfov": 43.62,
   "distance": 50
  }
 ],
 "id": "overlay_27D574F9_35DD_85AF_41C8_EFC08DB851D6",
 "data": {
  "label": "Arah Menuju Toilet"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2, this.camera_07622216_273F_4987_41B9_1267935AAF8F); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.34,
   "hfov": 20.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C0D357_26C2_CF85_41A1_FE386C2AC9CE",
   "pitch": -22.76,
   "yaw": 177.34,
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_D31576BC_C55E_0112_41D5_457C829D1EF1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF56D928_C536_0332_41DF_BB9C38C422E6, this.camera_07542206_273F_4987_41B8_D5BFE0ECAE27); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.17,
   "hfov": 21.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.81
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33C06357_26C2_CF85_41BF_7318E2F3BC08",
   "pitch": -11.81,
   "yaw": -6.17,
   "hfov": 21.96,
   "distance": 100
  }
 ],
 "id": "overlay_DD362D1B_C55E_0316_41E3_2014E1C6E2C5",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_D18C8254_E3AF_980C_41EA_E35325B1CA74, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D794A374_E395_980C_41D1_00B4F962FDBD, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.64,
   "hfov": 12.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82
  }
 ],
 "items": [
  {
   "yaw": -154.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 207,
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "hfov": 12.27
  }
 ],
 "id": "overlay_D1DA13D1_E3AF_9804_41E4_538D49970DB6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0, this.camera_38E37199_273F_4A8D_4180_97D9741A5435); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.14,
   "hfov": 15.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.55
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CFF357_26C2_CF85_41A8_124CE42ECE91",
   "pitch": -13.55,
   "yaw": -114.14,
   "hfov": 15.81,
   "distance": 100
  }
 ],
 "id": "overlay_D1DD7BF3_C572_0716_41DD_B91137F5EE50",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3, this.camera_38EFC1A8_273F_4A8C_41B6_7DD0091FB6BA); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.86,
   "hfov": 13.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CF6357_26C2_CF85_4191_C25C319754BE",
   "pitch": -11.73,
   "yaw": -0.86,
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "id": "overlay_DD6057E0_C552_0F32_41DF_3D76B23D9D3A",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2, this.camera_38D4A189_273F_4A8D_41C0_A82ED4D304A7); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.24,
   "hfov": 18.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CF2357_26C2_CF85_41BD_08373C5E9782",
   "pitch": -26.72,
   "yaw": 178.24,
   "hfov": 18.81,
   "distance": 100
  }
 ],
 "id": "overlay_DD20F388_C552_07F2_41DB_1DFC847ED046",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C, this.camera_3934DF85_273F_5684_41B1_88D811A3A8BB); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.2,
   "hfov": 19.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.86
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33D53367_26C2_CF85_41A6_F901C1DDDF84",
   "pitch": -20.86,
   "yaw": 95.2,
   "hfov": 19.66,
   "distance": 100
  }
 ],
 "id": "overlay_FA620C2C_E0C1_A4E7_41EA_DC72818DAE50",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7, this.camera_073B81F6_273F_4A84_41C0_7C6D908CE336); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.37,
   "hfov": 19.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CD7357_26C2_CF85_41B2_A00913066DF1",
   "pitch": -18.95,
   "yaw": -2.37,
   "hfov": 19.9,
   "distance": 100
  }
 ],
 "id": "overlay_DC968B85_C556_07FD_4192_714EB0C212F5",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E, this.camera_0746A1F6_273F_4A84_41BE_4952FB825734); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.8,
   "hfov": 24.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33CD0357_26C2_CF85_41B5_0988420E1125",
   "pitch": -30.78,
   "yaw": 179.8,
   "hfov": 24.98,
   "distance": 100
  }
 ],
 "id": "overlay_DC8117D3_C552_0F16_41DE_D265214B81C2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "fontFamily": "Arial",
 "height": "10%",
 "id": "DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C",
 "left": "0%",
 "paddingLeft": 5,
 "class": "DropDown",
 "paddingRight": 5,
 "backgroundOpacity": 0.9,
 "popUpShadow": false,
 "popUpFontColor": "#000000",
 "borderRadius": 0,
 "minHeight": 20,
 "popUpBackgroundOpacity": 0.9,
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "arrowColor": "#FFFFFF",
 "top": "0%",
 "popUpShadowSpread": 1,
 "selectedPopUpFontColor": "#FFFFFF",
 "minWidth": 200,
 "playList": "this.DropDown_35E603E0_26C5_4EBB_41B0_C0107987344C_playlist",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundColor": [
  "#666666"
 ],
 "popUpShadowBlurRadius": 6,
 "fontSize": 14,
 "borderSize": 0,
 "popUpGap": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "popUpShadowColor": "#000000",
 "gap": 0,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "shadow": false,
 "selectedPopUpBackgroundColor": "#333333",
 "fontWeight": "normal",
 "textDecoration": "none",
 "popUpBackgroundColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "DropDown1204"
 }
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C08357_26C2_CF85_41B2_EC5F7EE038E3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6CA626_C536_013E_41C0_C0DC48D6D7F3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C05357_26C2_CF85_41AF_13CDFF339943",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C90357_26C2_CF85_41AB_5C60366304E5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF5719D6_C536_031E_41CA_A40606BCF4FE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C8A357_26C2_CF85_419F_C3EE493D574C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_33D19367_26C2_CF85_419A_DA9F01EA9A0A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA9AB23_E0C0_6CE0_41DE_6DF84F2B85ED_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D10367_26C2_CF85_41C2_9E19E26B52EB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D45367_26C2_CF85_4125_6D7D484657E4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D3D367_26C2_CF85_41C0_C20EB0FBAC1C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D34367_26C2_CF85_41C0_EF7F59FD3A9F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9A05C2_E0C7_A7A3_41DC_4B3EA0EF6202_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D2E367_26C2_CF85_41AF_097ADAC6CB5E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D03367_26C2_CF85_41C0_792B5FB3AC83",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DFB367_26C2_CF85_419F_0823A06D9563",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEE221_E0C0_DCE0_41B9_496448121858_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DF2367_26C2_CF85_41B7_2DA93AED8EDD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D80367_26C2_CF85_4191_0DAABBFDC334",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA170DD_E0C1_BDA0_41E4_F064C9159B40_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_33A76367_26C2_CF85_4173_C4E100ED4F4E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CAB357_26C2_CF85_41BA_7C490F4ACFB4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6CF6DE_C536_010E_41E7_59982BE47262_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CA5357_26C2_CF85_41B1_5433EC9B7260",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_33D6C357_26C2_CF85_41B0_E2DC3026A7AF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3E299E9A_35BD_846C_4177_500B8C56F692_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D67367_26C2_CF85_41B5_E417963A3470",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CAD357_26C2_CF85_4184_87D3893B1CAC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F0993_C532_0316_41E3_6FCA70B2B260_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CA7357_26C2_CF85_41A9_A274A008F417",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CED357_26C2_CF85_41C1_0EC6E884FE86",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF529D9D_C532_0312_41E0_D60A4E6779B2_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CE9357_26C2_CF85_4193_BB2005F12A2E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D97367_26C2_CF85_41B3_22B5319DA087",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E8E94_E0C0_65A7_41C1_53C6096E34C3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D8C367_26C2_CF85_41B9_4994B7300BBA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DCE367_26C2_CF85_41BC_F46F6EF38304",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBA86725_E0C0_A4E1_41EA_0DBBA37B2394_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DC6367_26C2_CF85_41AC_2F3D05F2D6DF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AED376_26C2_CF84_4194_7DFCE8BDC014",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AE2376_26C2_CF84_41BF_6E107F17CA56",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33ADB376_26C2_CF84_41B6_800B712D6752",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9F9A5B_E0C0_ECA1_41EB_FC4570FADA35_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AD2376_26C2_CF84_41B2_C0AFF9BCD41B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A5E367_26C2_CF85_416A_A733585A07DE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAE7559_E0C1_E4A1_41E4_6353598FCFBD_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A59367_26C2_CF85_41C2_BE41598C1466",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC802CD9_E3B7_6804_41EA_774204EC6934_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33ACA376_26C2_CF84_41C3_0E28F8870C94",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBACE263_E0C7_FD61_41D7_836C5BB83A09_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D4A367_26C2_CF85_41C2_C5F1BC2028AC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D78357_26C2_CF85_41C2_5DF87BB0FC0A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB981A37_E0C0_6CE1_41CC_9091A1305C7E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D72357_26C2_CF85_4160_0260D424E3D6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C31357_26C2_CF85_4196_187CF95ED618",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C2B357_26C2_CF85_41C2_83CD0AEBA681",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF54B108_C532_00F2_41E3_350ABD5B69DB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C26357_26C2_CF85_41BC_8F0C50D3F48C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AFD376_26C2_CF84_41AE_7AD6E3E6CFD2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAED81F_E0C0_ECA1_41D9_70B139C10582_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AF5376_26C2_CF84_41C0_8562AC2C01D5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C69357_26C2_CF85_41C1_F4BFF8C0AD95",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6D2160_C532_0332_41B7_E9D9E7773A95_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C60357_26C2_CF85_41B3_CB53E4C48DA8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CCA357_26C2_CF85_41AB_0B1D4757B9FD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F0EDF_C532_010E_41D8_603DB309E58E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CC5357_26C2_CF85_41BA_9EE758A56D66",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CBF357_26C2_CF85_4190_E61746B3C066",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CB9357_26C2_CF85_41C1_8C7D91D382E9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF61D569_C532_0332_41E2_54BD0CAC3DAA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CB2357_26C2_CF85_41B1_80D7B1839000",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CE3357_26C2_CF85_41BD_A0BB2CEFAF02",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF52E10A_C532_00F7_41E3_FDD7E8CF95B7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CDD357_26C2_CF85_4164_B50CE72296A1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AC3376_26C2_CF84_41C3_24AFAE9ECC15",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33ABC376_26C2_CF84_41A0_F5BE3A8E887C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8B3C0AF_E3B6_B81C_41BB_CBB81E7DC1B7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AB5376_26C2_CF84_41BD_64CAF29D705B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D0D367_26C2_CF85_4191_950EB44001CD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9DB982_E0C0_6FA0_41E8_335F1AC527F8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D05367_26C2_CF85_41A7_CA438CF41B64",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C3D357_26C2_CF85_41B9_3D1514407941",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF53C77F_C532_0F0E_41E8_01D3D1D1E8C9_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_33C37357_26C2_CF85_41BA_F5A0D757E68B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DBC367_26C2_CF85_41C2_3F339D0D41FE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_33DB5367_26C2_CF85_41BA_9C8BDF70DADB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E49C1_E0C0_AFA0_41E8_44771669D528_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DAD367_26C2_CF85_4182_2DE56DC9B86D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A17376_26C2_CF84_4173_C68E4EE29F69",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A0C376_26C2_CF84_41B0_948B7C1C045C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9FD40E_E0C0_A4A3_41B0_6F79DEA986BB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A05376_26C2_CF84_41B8_9CC373723800",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D5E367_26C2_CF85_4190_06391F039CDB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB98DC46_E0C7_A4A0_41D9_7A25C89922E3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D58367_26C2_CF85_41B6_45844D45C271",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DE9367_26C2_CF85_41BC_09298D05040F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DE0367_26C2_CF85_41C3_47371C6B24F0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9E15D9_E0C0_E7A0_41E2_6B5AD51FA82C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33DD8367_26C2_CF85_415F_B106BBB06FFF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C88BF5F0_E3B6_9804_41E7_1EADE1AC52B9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33AA6376_26C2_CF84_41A6_C252144B0820",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBABABA9_E0C0_63E1_41DE_BE2CBB984B99_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_33DA1367_26C2_CF85_41BD_766BA1442587",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C1C357_26C2_CF85_419F_3E8884DFEEDF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C16357_26C2_CF85_4185_F9A679C05B68",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6C9336_C536_071E_41CA_63E0477AFAD2_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C12357_26C2_CF85_41C0_2B04F5E2BABB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A51376_26C2_CF84_4191_016002937456",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A48376_26C2_CF84_418A_E7A1C4F6DCD0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAE28B6_E0C1_ADE3_41C4_AF6B79FCDEA0_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A3C376_26C2_CF84_41BD_2B36E7FAE231",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A34376_26C2_CF84_41C3_5547D42A743E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9FCA36_E0C0_6CE3_41D7_F783AAFBDFF3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A2C376_26C2_CF84_41C0_ABAF13CB07A3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C44357_26C2_CF85_41B5_928F40B7746B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF4B7C81_C536_01F2_41E5_F7458C2AF9DD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C3E357_26C2_CF85_41A4_8C835849A45A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C59357_26C2_CF85_41A8_A2335C3431CF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF579672_C532_0116_41DA_E22B6EF26E22_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C53357_26C2_CF85_415B_68C10BD6EEAA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C9D357_26C2_CF85_41B6_D4F2678B9AF0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6F1764_C532_0F32_41DE_B9CEAEFEC2A0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C99357_26C2_CF85_41C1_3EE2CFA6ECA9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C9F357_26C2_CF85_41C2_A401A33F0AB7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF5765DA_C536_0316_41D2_DC8AA8D9F36E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C99357_26C2_CF85_41B4_1F1873E5D084",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A6E367_26C2_CF85_41BF_712A17D22AB5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9EF293_E0C1_DDA1_41EA_38A7E109F324_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A68367_26C2_CF85_41C2_A5C9C335D698",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A26376_26C2_CF84_419F_C6FDD951A0B8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAA7E42_E0C0_64A3_41E5_245064AE6119_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A1F376_26C2_CF84_41A8_3F389AE84E88",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A50367_26C2_CF85_41AF_556A169D4443",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A49376_26C2_CF84_41B9_BE9A4F763698",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9EB6A5_E0C1_A5E1_41D3_29A13B6FC3AE_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A59376_26C2_CF84_41A4_6EDC0DE34744",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C15357_26C2_CF85_4169_B257CE9C1818",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF56D928_C536_0332_41DF_BB9C38C422E6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C0E357_26C2_CF85_41AB_6963835E800F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C4E357_26C2_CF85_41A8_88A2BE861158",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6EDDA8_C532_0333_41D0_D677D12FA7EC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C4B357_26C2_CF85_41C2_8AA3DD14864F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9DFCDD_E0C0_A5A1_41C9_E2849A6F3526_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D0B367_26C2_CF85_41BF_E5658D093709",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C89F714D_E3B6_981C_41CB_005250412720_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33A9E376_26C2_CF84_41A4_F50267A135BF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C84357_26C2_CF85_41A1_670D6B077927",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDEA1849_E0C0_ACA1_418A_73B756A3A0B7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D7E357_26C2_CF85_41A5_0D4BB1CE98C5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D22367_26C2_CF85_41A5_64B7F67D4307",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D1F367_26C2_CF85_41B8_AA0E28A4DCA2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EBAEA737_E0C7_A4E1_41D9_3DB45995F80C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D17367_26C2_CF85_41A8_2A330911B265",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C0D357_26C2_CF85_41A1_FE386C2AC9CE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6DF424_C536_0132_417F_D5E155F8C7BC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33C06357_26C2_CF85_41BF_7318E2F3BC08",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CFF357_26C2_CF85_41A8_124CE42ECE91",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CF6357_26C2_CF85_4191_C25C319754BE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CE111A6D_C53E_0132_41DF_E9EAFD225733_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CF2357_26C2_CF85_41BD_08373C5E9782",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EB9AA077_E0C7_DD61_41E6_10CC954EFD41_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33D53367_26C2_CF85_41A6_F901C1DDDF84",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CD7357_26C2_CF85_41B2_A00913066DF1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF6C8FCD_C536_1F72_41C5_95E4CA660922_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33CD0357_26C2_CF85_41B5_0988420E1125",
 "frameCount": 24
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player481"
 },
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
