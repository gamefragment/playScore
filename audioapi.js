// JavaScript source code
let domain = "localhost";                       //ドメイン game-fragment.com localhost
//ここから From This
let audio_directory = "audio/city_piano_mp3/";      //音源のディレクトリ Sound source directory
let audio_file_extension = ".mp3";                  //音源の拡張子 Sound source extension
let audio_files = {
    a0: "A0-49-96", as0: "AS0-49-96", bf0: "AS0-49-96", b0: "B0-49-96", bs0: "C1-49-96", cf1: "B0-49-96"

    , c1: "C1-49-96", cs1: "CS1-49-96", df1: "CS1-49-96", d1: "D1-49-96", ds1: "DS1-49-96", ef1: "DS1-49-96", e1: "E1-49-96", ff1: "E1-49-96"
    , f1: "F1-49-96", fs1: "FS1-49-96", gf1: "FS1-49-96", g1: "G1-49-96", gs1: "GS1-49-96", af1: "GS1-49-96"
    , a1: "A1-49-96", as1: "AS1-49-96", bf1: "AS1-49-96", b1: "B1-97-110", bs1: "C2-49-96", cf2: "B1-97-110"

    , c2: "C2-49-96", cs2: "CS2-49-96", df2: "CS2-49-96", d2: "D2-49-96", ds2: "DS2-49-96", ef2: "DS2-49-96", e2: "E2-49-96", ff2: "E2-49-96"
    , f2: "F2-49-96", fs2: "FS2-49-96", gf2: "FS2-49-96", g2: "G2-49-96", gs2: "GS2-49-96", af2: "GS2-49-96"
    , a2: "A2-49-96", as2: "AS2-49-96", bf2: "AS2-49-96", b2: "B2-97-110", bs2: "C3-49-96", cf3: "B2-97-110"

    , c3: "C3-49-96", cs3: "CS3-49-96", df3: "CS3-49-96", d3: "D3-49-96", ds3: "DS3-49-96", ef3: "DS3-49-96", e3: "E3-49-96", ff3: "E3-49-96"
    , f3: "F3-49-96", fs3: "FS3-49-96", gf3: "FS3-49-96", g3: "G3-49-96", gs3: "GS3-49-96", af3: "GS3-49-96"
    , a3: "A3-49-96", as3: "AS3-49-96", bf3: "AS3-49-96", b3: "B3-97-110", bs3: "C4-49-96", cf4: "B3-97-110"

    , c4: "C4-49-96", cs4: "CS4-49-96", df4: "CS4-49-96", d4: "D4-49-96", ds4: "DS4-49-96", ef4: "DS4-49-96", e4: "E4-49-96", ff4: "E4-49-96"
    , f4: "F4-49-96", fs4: "FS4-49-96", gf4: "FS4-49-96", g4: "G4-49-96", gs4: "GS4-49-96", af4: "GS4-49-96"
    , a4: "A4-49-96", as4: "AS4-49-96", bf4: "AS4-49-96", b4: "B4-97-110", bs4: "C5-49-96", cf5: "B4-97-110"

    , c5: "C5-49-96", cs5: "CS5-49-96", df5: "CS5-49-96", d5: "D5-49-96", ds5: "DS5-49-96", ef5: "DS5-49-96", e5: "E5-49-96", ff5: "E5-49-96"
    , f5: "F5-49-96", fs5: "FS5-49-96", gf5: "FS5-49-96", g5: "G5-49-96", gs5: "GS5-49-96", af5: "GS5-49-96"
    , a5: "A5-49-96", as5: "AS5-49-96", bf5: "AS5-49-96", b5: "B5-97-110", bs5: "C6-49-96", cf6: "B5-97-110"

    , c6: "C6-49-96", cs6: "CS6-49-96", df6: "CS6-49-96", d6: "D6-49-96", ds6: "DS6-49-96", ef6: "DS6-49-96", e6: "E6-49-96", ff6: "E6-49-96"
    , f6: "F6-49-96", fs6: "FS6-49-96", gf6: "FS6-49-96", g6: "G6-49-96", gs6: "GS6-49-96", af6: "GS6-49-96"
    , a6: "A6-49-96", as6: "AS6-49-96", bf6: "AS6-49-96", b6: "B6-97-110", bs6: "A7-49-96", cf7: "B6-97-110"

    , c7: "C7-49-96", cs7: "CS7-49-96", df7: "CS7-49-96", d7: "D7-49-96", ds7: "DS7-49-96", ef7: "DS7-49-96", e7: "E7-49-96", ff7: "E7-49-96"
    , f7: "F7-49-96", fs7: "FS7-49-96", gf7: "FS7-49-96", g7: "G7-49-96", gs7: "GS7-49-96", af7: "GS7-49-96"
    , a7: "A7-49-96", as7: "AS7-49-96", bf7: "AS7-49-96", b7: "B7-97-110", bs7: "C8-49-96", cf8: "B7-97-110"

    , c8: "C8-49-96"
};         //連想配列の宣言 Declaration of associative array
let notes = {
    a0: "a0", as0: "as0", bf0: "bs0", b0: "b0", bs0: "bs0", cf1: "c1"

    , c1: "c1", cs1: "cs1", df1: "df1", d1: "d1", ds1: "ds1", ef1: "ef1", e1: "e1", ff1: "ff1"
    , f1: "f1", fs1: "fs1", gf1: "gf1", g1: "g1", gs1: "gs1", af1: "af1"
    , a1: "a1", as1: "as1", bf1: "bf1", b1: "b1", bs1: "bs1", cf2: "cf2"

    , c2: "c2", cs2: "cs2", df2: "df2", d2: "d2", ds2: "ds2", ef2: "ef2", e2: "e2", ff2: "ff2"
    , f2: "f2", fs2: "fs2", gf2: "gf2", g2: "g2", gs2: "gs2", af2: "af2"
    , a2: "a2", as2: "as2", bf2: "bf2", b2: "b2", bs2: "bs2", cf3: "cf3"

    , c3: "c3", cs3: "cs3", df3: "df3", d3: "d3", ds3: "ds3", ef3: "ef3", e3: "e3", ff3: "ff3"
    , f3: "f3", fs3: "fs3", gf3: "gf3", g3: "g3", gs3: "gs3", af3: "af3"
    , a3: "a3", as3: "as3", bf3: "bf3", b3: "b3", bs3: "bs3", cf4: "cf4"

    , c4: "c4", cs4: "cs4", df4: "df4", d4: "d4", ds4: "ds4", ef4: "ef4", e4: "e4", ff4: "ff4"
    , f4: "f4", fs4: "fs4", gf4: "gf4", g4: "g4", gs4: "gs4", af4: "af4"
    , a4: "a4", as4: "as4", bf4: "bf4", b4: "b4", bs4: "bs4", cf5: "cf5"

    , c5: "c5", cs5: "cs5", df5: "df5", d5: "d5", ds5: "ds5", ef5: "ef5", e5: "e5", ff5: "ff5"
    , f5: "f5", fs5: "fs5", gf5: "gf5", g5: "g5", gs5: "gs5", af5: "af5"
    , a5: "a5", as5: "as5", bf5: "bf5", b5: "b5", bs5: "bs5", cf6: "cf6"

    , c6: "c6", cs6: "cs6", df6: "df6", d6: "d6", ds6: "ds6", ef6: "ef6", e6: "e6", ff6: "ff6"
    , f6: "f6", fs6: "fs6", gf6: "gf6", g6: "g6", gs6: "gs6", af6: "af6"
    , a6: "a6", as6: "as6", bf6: "bf6", b6: "b6", bs6: "bs6", cf7: "cf7"

    , c7: "c7", cs7: "cs7", df7: "df7", d7: "d7", ds7: "ds7", ef7: "ef7", e7: "e7", ff7: "ff7"
    , f7: "f7", fs7: "fs7", gf7: "gf7", g7: "g7", gs7: "gs7", af7: "af7"
    , a7: "a7", as7: "as7", bf7: "bf7", b7: "b7", bs7: "bs7", cf8: "cf8"

    , c8: "c8"
}               //音名の連想配列 Associative array of note names
let note_arrays = [
    "a0", "as0", "bs0", "b0", "bs0", "c1"

    , "c1", "cs1", "df1", "d1", "ds1", "ef1", "e1", "ff1"
    , "f1", "fs1", "gf1", "g1", "gs1", "af1"
    , "a1", "as1", "bf1", "b1", "bs1", "cf2"

    , "c2", "cs2", "df2", "d2", "ds2", "ef2", "e2", "ff2"
    , "f2", "fs2", "gf2", "g2", "gs2", "af2"
    , "a2", "as2", "bf2", "b2", "bs2", "cf3"

    , "c3", "cs3", "df3", "d3", "ds3", "ef3", "e3", "ff3"
    , "f3", "fs3", "gf3", "g3", "gs3", "af3"
    , "a3", "as3", "bf3", "b3", "bs3", "cf4"

    , "c4", "cs4", "df4", "d4", "ds4", "ef4", "e4", "ff4"
    , "f4", "fs4", "gf4", "g4", "gs4", "af4"
    , "a4", "as4", "bf4", "b4", "bs4", "cf5"

    , "c5", "cs5", "df5", "d5", "ds5", "ef5", "e5", "ff5"
    , "f5", "fs5", "gf5", "g5", "gs5", "af5"
    , "a5", "as5", "bf5", "b5", "bs5", "cf6"

    , "c6", "cs6", "df6", "d6", "ds6", "ef6", "e6", "ff6"
    , "f6", "fs6", "gf6", "g6", "gs6", "af6"
    , "a6", "as6", "bf6", "b6", "bs6", "cf7"

    , "c7", "cs7", "df7", "d7", "ds7", "ef7", "e7", "ff7"
    , "f7", "fs7", "gf7", "g7", "gs7", "af7"
    , "a7", "as7", "bf7", "b7", "bs7", "cf8"

    , "c8"
]       //音名の文字列の配列 Array of note name strings

PlayBlock: {
    let play_button = document.getElementById('play-button');			//play_buttonの要素を指定
    play_button.addEventListener('click', playScore, false);

    let console_textarea = document.getElementById('console-textarea'); //console-textareaの要素を指定

    let score_textarea = document.getElementById('score-textarea');			//score-textareaの要素を指定
    //score_textarea.addEventListener('click', playScore, false);

    //AudioContextの宣言
    let audio_context;  //new AudioContext()は行わない
    let is_playing = false;     //演奏中かどうかの判定 Judgment of whether or not it is playing

    let stop_button = document.getElementById('stop-button');			//stop-buttonの要素を指定
    stop_button.addEventListener('click', stopScore, false);

    function stopScore() {
        if (document.domain === domain) {
            if (is_playing == true) {
                console_textarea.value = 'Audio Stopping...';
                stopAudio();                    //メディアソースを停止 Stop media source
            }
        }
    }

    function stopAudio() {
        //メディアソースを停止 非同期処理 Stop media source Asynchronous processing
        audio_context.close().then(function () {
            is_playing = false;
            console_textarea.value = 'Audio Stopped';
        });  //audio_context閉じてオーディオリソースを解放する AudioContext Close to free audio resources
    }

    function playScore() {
        //AudioContextの宣言
        audio_context = new AudioContext();
        console_textarea.value = 'Reading sheet music data...';
        let score_arrays = getScore(score_textarea); //楽譜の二次元配列を取得 Get a two-dimensional array of sheet music
        let keys = [];                          //keyの二次元配列格納用 For storing a two-dimensional array of keys
        let whens = [];                     //whenの二次元配列格納用 For storing a two-dimensional array of whens
        let offsets = [];                       //offsetの二次元配列格納用 For storing a two-dimensional array of offsets
        let durations = [];                 //durationの二次元配列格納用 For storing a two-dimensional array of durations
        //開始地点の設定
        let number_area = document.getElementById('number-area');			//play_buttonの要素を指定
        let start_number = Number(number_area.value);                                           //数値を取得 Get the number
        let start_position = initializeStartPosition(start_number, score_arrays);
        //楽譜情報の設定
        let media_arrays = {}
        media_arrays = setScoreInfo(score_arrays, start_position, keys, whens, offsets, durations);
        keys = media_arrays["keys"];                          //keyの二次元配列格納用 For storing a two-dimensional array of keys
        whens = media_arrays["whens"];                     //whenの二次元配列格納用 For storing a two-dimensional array of whens
        offsets = media_arrays["offsets"];                       //offsetの二次元配列格納用 For storing a two-dimensional array of offsets
        durations = media_arrays["durations"];                 //durationの二次元配列格納用 For storing a two-dimensional array of durations
        //再生処理へ To playback process
        is_playing = true; //再生中 Playing
        console_textarea.value = 'Preloading Music Data...';
        //楽譜の再生 Playing sheet music
        if (document.domain === domain) {
            //console.log(keys);
            //console.log(whens);
            //console.log(offsets);
            //console.log(durations);
            playAudio(audio_context, keys, whens, offsets, durations);
        }
        
    }

    function setScoreInfo(score_arrays, start_position, keys, whens, offsets, durations) {
        //1行ごとに分けて実行
        for (let i = start_position; i < (score_arrays.length); i++) {
            let key = [];                       //keyの一次元配列格納用（1行分） For storing a one-dimensional array of keys (for one line)
            let when = [];                  //whenの一次元配列格納用（1行分） For storing a one-dimensional array of whens (for one line)
            let offset = [];               //offsetの一次元配列格納用（1行分） For storing a one-dimensional array of offsets (for one line)
            let duration = [];          //durationの一次元配列格納用（1行分） For storing a one-dimensional array of durations (for one line)
            let default_duration = 30000;  //1音楽ファイルの標準での再生長さ 1 Standard playback length of music files
            //列についての処理 Processing about columns
            let note_count = 1;     //音名が.で複数繋がれている場合には.の回数分処理を行う If multiple note names are connected by '.', Process for the number of times of '.'
            for (let j = 0; j < score_arrays[i].length; j++) {
                //この行での開始時刻の設定 Setting the start time on this line
                let start_time = Number(score_arrays[i][1]) - Number(score_arrays[start_position][1]) + 1000;
                //この行での終了時刻の設定 Setting the end time on this line
                let end_time = Number(score_arrays[i][2]) - Number(score_arrays[start_position][1]) + 1000;
                //この行での開始から終了までの間隔 Interval from start to end on this line
                let interval = end_time - start_time;
                //3列目以降の処理 Processing of the third and subsequent columns
                if (j % 2 == 1 && j >= 3 && j <= 22) {
                    let ostrs = score_arrays[i][j].split('.');  //.で分割
                    let dot_count = ostrs.length;   //.の数を計算
                    pushMediaSourceKey(key, ostrs, dot_count);  //Keyをセット
                    note_count = dot_count;     //.での分割回数をnote_countにセット Set the number of divisions in '.' To note_count
                } else if (j % 2 == 0 && j >= 4 && j <= 23) {
                    //when,offset,durationの記述された列の処理
                    let ostrs = score_arrays[i][j].split('.');  //.で分割
                    let dot_count = ostrs.length;   //.の数を計算 Calculate the number of '.'
                    for (let k = 0; k < note_count; k++) {
                        switch (dot_count) {
                            case 1:
                                pushMediaSourceWhen(when, ostrs[0], start_time);    //When
                                pushMediaSourceOffset(offset, '0');                    //Offset
                                pushMediaSourceDuration(duration, '0', interval, default_duration);    //Duration
                                break;
                            case 2:
                                pushMediaSourceWhen(when, ostrs[0], start_time);    //When
                                pushMediaSourceOffset(offset, ostrs[1]);                    //Offset
                                pushMediaSourceDuration(duration, '0', interval, default_duration);    //Duration
                                break;
                            case 3:
                                pushMediaSourceWhen(when, ostrs[0], start_time);    //When
                                pushMediaSourceOffset(offset, ostrs[1]);                    //Offset
                                pushMediaSourceDuration(duration, ostrs[2], interval, default_duration);    //Duration
                                break;
                            default:
                                when.push(start_time);
                                offset.push(0); //音源ファイルを最初から再生 Play sound source file from the beginning
                                duration.push(interval);
                                break;
                        }
                    }
                }
            }
            keys.push(key);
            whens.push(when);
            offsets.push(offset);
            durations.push(duration);
        }
        let media_arrays = {};          //連想配列の宣言 Declaration of associative array
        media_arrays.keys = keys;
        media_arrays.whens = whens;
        media_arrays.offsets = offsets;
        media_arrays.durations = durations;
        return media_arrays;
    }

    async function playAudio(audio_context, keys, whens, offsets, durations) {
        console_textarea.value = "Getting File Data...";
        //AudioContextの宣言
        //let audio_context = new AudioContext();
        //ファイルを取得（fetchAPIが非同期処理のためawaitを使用）
        //Get file (fetchAPI uses await for asynchronous processing)
        let responses = []; //ファイルを格納する配列のコンストラクタの作成
        for (let elems of keys) {
            let files = []; //配列の宣言
            for (let elem of elems) {
                let file = await fetch(audio_directory + audio_files[elem] + audio_file_extension);
                files.push(file);   //配列に要素を格納
            }
            responses.push(files);   //取得してきたファイルを要素に格納 Store the acquired files in an array
        }
        console_textarea.value = "Converting File Data...";
        //バッファーを確保（arrayBufferが非同期処理のためawaitを使用）
        //Allocate buffer (use await because arrayBuffer is asynchronous)
        let array_buffers = [];     //ファイルをメモリに格納する配列の宣言 Declaration of an array to store files in memory
        for (let elems of responses) {
            let buffers = [];   //配列の宣言
            for (let elem of elems) {
                buffers.push(await elem.arrayBuffer());
            }
            array_buffers.push(buffers);   //ファイルを各バッファ要素に格納 Store files in each buffer array
        }
        console_textarea.value = "Buffering Audio Data...";
        // Web Audio APIで使える形式に変換（バッファーデータを音データに変換、decodeAudioDataが非同期処理のためawaitを使用）
        //Convert to a format that can be used with the Web Audio API
        let audio_buffers = [];     //バッファーを音データに変換した要素を格納する配列の宣言 Declaration of an array to store the elements that converted the buffer into sound data
        for (let elems of array_buffers) {
            let buffers = [];   //配列の宣言
            for (let elem of elems) {
                buffers.push(await audio_context.decodeAudioData(elem));
            }
            //バッファーのデータを音データに変換して各要素に格納
            audio_buffers.push(buffers);
        }
        console_textarea.value = "Setting Media Sources...";
        //出力に接続するメディアソースの設定
        //Setting the media source to connect to the output
        let media_sources = [];     //メディアソースを格納する配列の宣言（WebAudioApiの制約のため再代入不可）
        for (let elems of audio_buffers) {
            let sources = [];   //配列の宣言
            for (let elem of elems) {
                sources.push(audio_context.createBufferSource());
            }
            //AudioContextにメディアソース分のノードを設定する Set the node for the media source in AudioContext
            media_sources.push(sources);
        }
        console_textarea.value = "Setting Audio Sources Buffers...";
        // 変換されたバッファーを音源として設定 Set the converted buffer as a sound source
        for (let i = 0; i < media_sources.length; i++) {
            for (let j = 0; j < media_sources[i].length; j++) {
                //メディアソースのバッファーとファイルを音データに変換したバッファーを一致させる
                //Match the buffer of the media source with the buffer of the file converted to sound data
                media_sources[i][j].buffer = audio_buffers[i][j];
            }
        }
        console_textarea.value = "Setting Audio Gains Node...";
        //GainNodeの作成
        let gain_nodes = [];         //AudioGainの宣言
        for (let elems of media_sources) {
            let gain_node = [];     //1行分のゲインノードの配列 Array of gain nodes for one row
            for (let elem of elems) {
                //ゲインノードを作成する Create a gain node
                gain_node.push(audio_context.createGain());
            }
            gain_nodes.push(gain_node);     //ゲインノードの作成
        }
        console_textarea.value = "Setting Audio Sources Node...";
        //Sources -> Gainへ接続
        for (let i = 0; i < media_sources.length; i++) {
            for (let j = 0; j < media_sources[i].length; j++) {
                media_sources[i][j].connect(gain_nodes[i][j]);   //SourceをGainNodeに接続
            }
        }
        console_textarea.value = "Connecting Audio Context...";
        // 出力につなげる
        for (let elems of gain_nodes) {
            for (let elem of elems) {
                //メディアソースを接続する Connect the media source
                elem.connect(audio_context.destination);
            }
        }
        console_textarea.value = "Play";
        //メディアソースを再生 Play media source
        for (let i = 0; i < media_sources.length; i++) {
            for (let j = 0; j < media_sources[i].length; j++) {
                media_sources[i][j].start(whens[i][j], offsets[i][j], durations[i][j]);   //音を再生 Play sound
                setDecay(gain_nodes[i][j], whens[i][j] + durations[i][j] - 0.07);  //減衰設定 Attenuation setting
            }
        }

        //減衰関数の設定
        function setDecay(gain_node, start_time) {
            let gain_values = [];   //最後の音量を現在地→0へ減衰させる Attenuates the last volume from the current location to 0
            gain_values.push(gain_node.gain.value);  //現在値の設定
            gain_values.push(0);    //0の設定
            gain_node.gain.setValueCurveAtTime(gain_values, start_time, 0.07); //最後に減衰させてクリックノイズを軽減する Finally attenuate to reduce click noise
        }
    }

    function convertMilisecToSec(millisecond) {
        return (millisecond / 1000);    //ミリ秒で記述されたものを秒に換算する Convert what is written in milliseconds to seconds
    }

    function pushMediaSourceKey(key, ostrs, dot_count) {
        if (dot_count === 1) {
            key.push(ostrs[0]); //音名を1行分セット Set one line of note names
        } else if (dot_count >= 2) {
            for (let k = 0; k < ostrs.length; k++) {
                key.push(ostrs[k]); //音名を1つずつセット Set one note name at a time
            }
        } else {
            key.push(ostrs[0]); //音名を1つセット（エラー対策） Set one note name (error countermeasure)
        }
        return key;
    }

    function pushMediaSourceWhen(when, ostr, start_time) {
        let when_start;
        if (ostr.indexOf('=') != -1) {
            when_start = convertMilisecToSec(start_time);
        } else {
            when_start = convertMilisecToSec(start_time + Number(ostr));
        }
        when.push(when_start);
        return when;
    }

    function pushMediaSourceOffset(offset, ostr) {
        if (ostr.indexOf('=') != -1) {
            offset.push(0);
        } else {
            offset.push(convertMilisecToSec(Number(ostr)));
        }
        return offset;
    }

    function pushMediaSourceDuration(duration, ostr, interval, default_duration) {
        if (ostr.indexOf('=') != -1) {
            duration.push(convertMilisecToSec(default_duration));
        } else if (Number(ostr) == 0) {
            duration.push(convertMilisecToSec(interval));
        } else {
            duration.push(convertMilisecToSec(Number(ostr)));
        }
        return duration;
    }

    function getScore(score_textarea) {
        let score_arrays = [];
        score_arrays = parseCsvArray(score_textarea.value);     //テキストエリアから楽譜の二次元配列を取得 Get a two-dimensional array of sheet music from a text area
        return score_arrays;
    }

    function parseCsvArray(data) {
        let csv_arrays = [];    //配列を用意
        let data_lines = data.split('\n');  //改行で分割
        for (let i = 0; i < data_lines.length; i++) { //あるだけループ
            data_lines[i] = stringFormat(data_lines[i]);    //文字列の整形
            csv_arrays[i] = data_lines[i].split(' ');   //各行ごとにスペースで区切った文字列を要素とした二次元配列を生成 Generate a two-dimensional array with a character string separated by a space for each line as an element
        }
        return csv_arrays;  //二次元配列を戻す
    }

    function stringFormat(str) {
        let modified_str = str.toLowerCase(); //大文字を小文字にする（例：C4→c4）
        modified_str = modified_str.replace(/ , /g, ' '); // , → に変換
        modified_str = modified_str.replace(/, /g, ' '); //, → に変換
        modified_str = modified_str.replace(/ ,/g, ' '); // ,→ に変換
        modified_str = modified_str.replace(/,/g, ' '); //,→ に変換
        modified_str = modified_str.replace(/\*/g, '=');    //*→=に変換
        modified_str = modified_str.replace(/ \;/g, '');    // ;→=に変換
        modified_str = modified_str.replace(/\;/g, '');    //;→=に変換
        return modified_str;
    }

    function initializeStartPosition(start_number, score_arrays) {
        if (!start_number || start_number <= 0 || start_number > score_arrays.length) {
            start_position = 0;                                     //最初から開始 Start from the beginning
        } else {
            start_position = start_number - 1;              //途中から開始（配列は0からスタートのためマイナス1） Start from the middle (since the array starts from 0, minus 1)
        }
        return start_position;
    }

    let test_button = document.getElementById('test-button');			//test-buttonの要素を指定
    test_button.addEventListener('click', testScore, false);

    function testScore() {
        console_textarea.value = 'Test';
        console.log(document.domain);
        console.log(is_playing);
        //console.log(getScore(score_textarea));
    }


}


TestBlock: {

}


















