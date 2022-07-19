import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom'
import AppLayout from './AppLayout'
import Login from './pages/login'
import Header from './components/header'
import Items from './pages/admin/items'
import Pest from './pages/admin/items/pest'
import Durs from './pages/admin/items/pest/durs'

import Lcf from './pages/admin/experts/lcf'
import Zf from './pages/admin/experts/zf'
import Qb from './pages/admin/tests/qb'
import Dylz from './pages/admin/tests/dylz'
import Data from './pages/admin/data'




export default class App extends Component {
  render() {
    return (
        <div>
            <div className='div1'>
            <Header/>
            </div>
            <div className='div2'>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/admin" element={<AppLayout/>}>
                  <Route path="/admin/items" element={<Items/>}>
                <Route path="admin/items/pest/durs" element={<Durs/>}/>
                </Route>
                <Route path="/admin/experts/lcf" element={<Lcf/>}/>
                <Route path="/admin/experts/zf" element={<Zf/>}/>
                <Route path="/admin/tests/qb" element={<Qb/>}/>
                <Route path="/admin/tests/dylz" element={<Dylz/>}/>
                <Route path="/admin/data" element={<Data/>}/>
            </Route>
               </Routes>
            </div>
        </div>
    )}
}
