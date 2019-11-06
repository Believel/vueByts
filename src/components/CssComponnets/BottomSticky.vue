<template>
  <div class="container">
    <div class="poem-container">
      <article>
        <el-checkbox v-model="checked">隐藏内容</el-checkbox>
        <div class="poem" v-if="!checked">
          <p>海客談瀛洲，煙濤微茫信難求</p>
          <p>越人語天姥，雲霞明滅或可覩</p>
          <p>天姥連天向天橫，勢拔五嶽掩赤城</p>
          <p>天台四萬八千丈，對此欲倒東南傾</p>
          <p>我欲因之夢吳越，一夜飛渡鏡湖月</p>
          <p>湖月照我影，送我至剡溪</p>
          <p>謝公宿處今尚在，淥水蕩漾清猨啼</p>
          <p>腳著謝公屐，身登青雲梯</p>
          <p>半壁見海日，空中聞天雞</p>
          <p>千巖萬轉路不定，迷花倚石忽已暝</p>
          <p>熊咆龍吟殷巖泉，慄深林兮驚層巔</p>
          <p>雲青青兮欲雨，水澹澹兮生煙</p>
          <p>列缺霹靂，丘巒崩摧</p>
          <p>洞天石扉，訇然中開</p>
          <p>青冥浩蕩不見底，日月照耀金銀臺</p>
          <p>霓爲衣兮風爲馬，雲之君兮紛紛而來下</p>
          <p>虎鼓瑟兮鸞迴車，仙之人兮列如麻</p>
          <p>忽魂悸以魄動，怳驚起而長嗟</p>
          <p>惟覺時之枕席，失向來之煙霞</p>
          <p>世間行樂亦如此，古來萬事東流水</p>
          <p>別君去兮何時還？且放白鹿青崖間，須行即騎訪名山</p>
          <p>安能摧眉折腰事權貴，使我不得開心顏</p>
        </div>
      </article>
      <footer>
        底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。
      </footer>
    </div>
    <hr>
    <div class="article-container">
      海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林兮驚層巔。雲青青兮欲雨，水澹澹兮生煙。列缺霹靂，丘巒崩摧。洞天石扉，訇然中開。青冥浩蕩不見底，日月照耀金銀臺。霓爲衣兮風爲馬，雲之君兮紛紛而來下。虎鼓瑟兮鸞迴車，仙之人兮列如麻。忽魂悸以魄動，怳驚起而長嗟。惟覺時之枕席，失向來之煙霞。世間行樂亦如此，古來萬事東流水。別君去兮何時還？且放白鹿青崖間，須行即騎訪名山。安能摧眉折腰事權貴，使我不得開心顏。
    </div>
    <div class="article-container2">
      海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林兮驚層巔。雲青青兮欲雨，水澹澹兮生煙。列缺霹靂，丘巒崩摧。洞天石扉，訇然中開。青冥浩蕩不見底，日月照耀金銀臺。霓爲衣兮風爲馬，雲之君兮紛紛而來下。虎鼓瑟兮鸞迴車，仙之人兮列如麻。忽魂悸以魄動，怳驚起而長嗟。惟覺時之枕席，失向來之煙霞。世間行樂亦如此，古來萬事東流水。別君去兮何時還？且放白鹿青崖間，須行即騎訪名山。安能摧眉折腰事權貴，使我不得開心顏。
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Hover extends Vue {
  public checked: boolean = false;
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .poem-container {
      width: 45%;
      height: 400px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      overflow: auto;
      /* 关键点*/
      article {
        min-height: 100%;
        .poem {
          /* 关键点*/
          padding-bottom: 41px;
          zoom: 1;
          box-sizing: border-box;
        }
      }
      footer {
        background: #00adb5;
        color: #fff;
        padding: 10px;
        /* 关键点*/
        margin-top: -41px;
        box-sizing: border-box;
      }
    }
    /* 单行文字超出显示省略号*/
    .article-container {
      width: 45%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* 多行文字超出显示省略号 */
    .article-container2 {
      width: 45%;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      /* 需要显示的行数 */
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>