<template>
    <div class="c">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Quản lý Sách</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'contactbook'}">Trang chủ</router-link>
        </li>
        <li class="nav-item">
            <router-link
                class="nav-link"
                :to="{
                name: 'contactadd', 
                }"
            >
            Thêm Sách
            </router-link> 
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'theodoimuonsach.home'}">Quản lý sách</router-link>
        </li>
        </ul>
    </div>
    </nav>
    </div>
</template>