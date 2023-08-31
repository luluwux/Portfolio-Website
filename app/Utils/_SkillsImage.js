import adobeXd from '../Assets/Images/Skills/adobe-xd.svg'
import adobeaudition from '../Assets/Images/Skills/adobeaudition.svg'
import afterEffects from '../Assets/Images/Skills/after-effects.svg'
import angular from '../Assets/Images/Skills/angular.svg'
import aws from '../Assets/Images/Skills/aws.svg'
import bootstrap from '../Assets/Images/Skills/bootstrap.svg'
import bulma from '../Assets/Images/Skills/bulma.svg'
import c from '../Assets/Images/Skills/c.svg'
import capacitorjs from '../Assets/Images/Skills/capacitorjs.svg'
import coffeescript from '../Assets/Images/Skills/coffeescript.svg'
import cplusplus from '../Assets/Images/Skills/cplusplus.svg'
import csharp from '../Assets/Images/Skills/csharp.svg'
import css from '../Assets/Images/Skills/css.svg'
import dart from '../Assets/Images/Skills/dart.svg'
import deno from '../Assets/Images/Skills/deno.svg'
import django from '../Assets/Images/Skills/django.svg'
import docker from '../Assets/Images/Skills/docker.svg'
import firebase from '../Assets/Images/Skills/firebase.svg'
import gcp from '../Assets/Images/Skills/gcp.svg'
import gimp from '../Assets/Images/Skills/gimp.svg'
import git from '../Assets/Images/Skills/git.svg'
import go from '../Assets/Images/Skills/go.svg'
import graphql from '../Assets/Images/Skills/graphql.svg'
import html from '../Assets/Images/Skills/html.svg'
import illustrator from '../Assets/Images/Skills/illustrator.svg'
import java from '../Assets/Images/Skills/java.svg'
import javascript from '../Assets/Images/Skills/javascript.svg'
import julia from '../Assets/Images/Skills/julia.svg'
import kotlin from '../Assets/Images/Skills/kotlin.svg'
import lightroom from '../Assets/Images/Skills/lightroom.svg'
import materialui from '../Assets/Images/Skills/materialui.svg'
import matlab from '../Assets/Images/Skills/matlab.svg'
import memsql from '../Assets/Images/Skills/memsql.svg'
import mongoDB from '../Assets/Images/Skills/mongoDB.svg'
import mysql from '../Assets/Images/Skills/mysql.svg'
import nextJS from '../Assets/Images/Skills/nextJS.svg'
import nginx from '../Assets/Images/Skills/nginx.svg'
import numpy from '../Assets/Images/Skills/numpy.svg'
import nuxtJS from '../Assets/Images/Skills/nuxtJS.svg'
import opencv from '../Assets/Images/Skills/opencv.svg'
import photoshop from '../Assets/Images/Skills/photoshop.svg'
import php from '../Assets/Images/Skills/php.svg'
import postgresql from '../Assets/Images/Skills/postgresql.svg'
import premierepro from '../Assets/Images/Skills/premierepro.svg'
import python from '../Assets/Images/Skills/python.svg'
import pytorch from '../Assets/Images/Skills/pytorch.svg'
import react from '../Assets/Images/Skills/react.svg'
import ruby from '../Assets/Images/Skills/ruby.svg'
import selenium from '../Assets/Images/Skills/selenium.svg'
import strapi from '../Assets/Images/Skills/strapi.svg'
import svelte from '../Assets/Images/Skills/svelte.svg'
import swift from '../Assets/Images/Skills/swift.svg'
import tailwind from '../Assets/Images/Skills/tailwind.svg'
import tensorflow from '../Assets/Images/Skills/tensorflow.svg'
import typescript from '../Assets/Images/Skills/typescript.svg'
import vitejs from '../Assets/Images/Skills/vitejs.svg'
import vue from '../Assets/Images/Skills/vue.svg'
import vuetifyjs from '../Assets/Images/Skills/vuetifyjs.svg'
import webix from '../Assets/Images/Skills/webix.svg'
import wordpress from '../Assets/Images/Skills/wordpress.svg'

import azure from '../Assets/Images/Skills/azure.svg'
import blender from '../Assets/Images/Skills/blender.svg'
import fastify from '../Assets/Images/Skills/fastify.svg'
import figma from '../Assets/Images/Skills/figma.svg'
import flutter from '../Assets/Images/Skills/flutter.svg'
import haxe from '../Assets/Images/Skills/haxe.svg'
import ionic from '../Assets/Images/Skills/ionic.svg'
import markdown from '../Assets/Images/Skills/markdown.svg'
import microsoftoffice from '../Assets/Images/Skills/microsoftoffice.svg'
import picsart from '../Assets/Images/Skills/picsart.svg'
import sketch from '../Assets/Images/Skills/sketch.svg'
import unity from '../Assets/Images/Skills/unity.svg'
import wolframalpha from '../Assets/Images/Skills/wolframalpha.svg'

import canva from '../Assets/Images/Skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}