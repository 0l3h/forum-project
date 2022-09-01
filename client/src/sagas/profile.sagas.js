import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { 
    getProfileSuccess,
    getProfileError
} from '../slices/profile.slice.js';

