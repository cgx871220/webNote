<template>
    <h2 class="text-center">
        git
    </h2>
    <p>
        git安裝網址:<a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a>
        <hr>
        cmd基本使用:
        <ul>
            <li>start .  →  以檔案總管開啟</li>
            <li>code .  →  用vsCode開啟</li>
            <li>cd ＜路徑＞  →  前往指定路徑</li>
            <li>dir  →  顯示目前目錄下的所有檔案 </li>
            <li>del ＜檔案名＞  → 刪除指定檔案</li>
            <li>move ＜檔案名＞ ＜新路徑＞  →  移動檔案到新路徑</li>
            <li>ren ＜檔案名＞ ＜新名字＞  →  改名</li>
            <li>md/mkdir ＜資料夾名＞  →  創建資料夾</li>
        </ul>
        <hr>
        初次使用:
        <ol>
            <li>git config --global user.name "名字"</li>
            <li>git config --global user.email "email"</li>
        </ol>
        git config --list		顯示config資料
        <hr>
        基本使用:
        <ol>
            <li>
                git init → 初始化資料夾(新增.git資料夾)
            </li>
            <li>
                git status → 查看目前目錄的狀態
            </li>
            <li>
                git add ＜檔案名＞ → 將檔案加入索引
            </li>
            <li>
                git commit -m  "說明內容" →  描述新版本的commit內容
            </li>
        </ol>
        git log  →  查詢版本
        git reset ＜版本號＞  →  前往選擇的commit
        <hr>
        分支操作:
        <ul>
            <li>
                git branch ＜分支名＞ → 建立分支
            </li>
            <li>
                git branch → 查看分支
            </li>
            <li>
                git checkout ＜分支名＞ → 切換分支
            </li>
            <li>
                git branch -d → 刪除分支
            </li>
            <li>
                git merge ＜別的分支名＞ → 將現有分支和別的分支合併
            </li>
        </ul>
        <hr>
        遠端操作:
        <ul>
            <li>git remote add ＜遠端自訂名字＞ ＜網址＞ →新增遠端數據庫<span>(預設遠端自訂名字為origin)</span></li>
            <li>git push ＜遠端自訂名字＞ ＜分支名＞  →  將分支推送到數據庫<span>(預設分支名為master)</span></li>
            <li>git remote  →  查看所有遠端數據庫</li> 
            <li>git clone ＜網址＞  →  下載遠端數據庫</li>
            <li>git pull  →  將遠端數據庫的資料同步本端</li>
        </ul>
        <hr>
        
    </p>
</template>


<style>
li::marker{
    font-size: 26px;
    font-weight: 600;
}
span{
    color: #9d9c9c;
    font-size: 16px;
}
</style>