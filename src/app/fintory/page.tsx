"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Layers, CreditCard, DollarSign, Users, Settings, HelpCircle, LogOut, Menu, Plus, Copy, Eye, ChevronRight } from 'lucide-react'

// Define types for nav items and cards
type NavItem = { icon: React.ElementType; label: string };
type CardItem = { name: string; status: string; access: number; number: string };

export default function FintoryDashboard() {
  const [activeNavItem, setActiveNavItem] = useState<string>('Cards')

  const navItems: NavItem[] = [
    { icon: Home, label: 'Home' },
    { icon: Layers, label: 'Accounts' },
    { icon: CreditCard, label: 'Cards' },
    { icon: DollarSign, label: 'Payments' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ]

  const cardsList: CardItem[] = [
    { name: 'Basic Corporate', status: 'ACTIVE', access: 2, number: '4295' },
    { name: 'Inventory card', status: 'ACTIVE', access: 3, number: '0682' },
    { name: 'Software subscriptions', status: 'ACTIVE', access: 2, number: '5687' },
    { name: 'Traveling card', status: 'ACTIVE', access: 1, number: '8042' },
    { name: 'Project "Catana"', status: 'DISABLED', access: 0, number: '5820' },
  ]

  const handleCardClick = (cardName: string) => {
    console.log(cardName);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-80 flex flex-col bg-gray-900 text-white p-6">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
          <span className="text-xl font-semibold">Fintory</span>
        </div>
        <nav>
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full py-2 px-4 rounded-lg mb-2 ${activeNavItem === item.label ? 'bg-green-500 text-white' : 'hover:bg-gray-800'
                }`}
              onClick={() => setActiveNavItem(item.label)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-800">
            <HelpCircle className="mr-3 h-5 w-5" />
            Help
          </button>
          <button className="flex items-center w-full py-2 px-4 rounded-lg hover:bg-gray-800">
            <LogOut className="mr-3 h-5 w-5" />
            Log out
          </button>
        </div>
        <div className="flex items-center border-t-2 pt-4 mt-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Edward Baldwin" />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar>
          <div className="ml-3 border-l border-gray-300 pl-3">
            <p className="text-sm font-medium">Edward Baldwin</p>
            <p className="text-xs text-gray-400">ed.baldwin@nasa.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex w-full  border-blue-500">

        <div className='flex w-full flex-col px-2 border-r-2 border-gray-200'>
          <div className="flex justify-between px-8 py-12 items-center ">
            <p className="text-3xl font-semibold">Cards list</p>
            <div>
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-2 cursor-pointer">
            {cardsList.map((card, index) => (
              <Card key={index} className={`cursor-pointer ${activeNavItem === card.name ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`} onClick={() => handleCardClick(card.name)}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{card.name}</span>
                    <span className="text-sm font-normal">{card.number}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm ">• {card.status}</p>
                  <div className='flex gap-2 items-center'>
                    <p className="text-sm">Issued access</p>
                    <span className="text-sm bg-gray-200 text-black px-2 py-1 rounded">{card.access}</span>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Software Subscriptions Details */}
        <div className='flex flex-col border-red-500 w-full'>
          <div className="flex justify-between px-8 py-12 items-center ">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
              <span className='text-3xl'>Software subscriptions</span>
            </div>
            <div>
              <Button variant="outline" size="lg" className="text-lg mr-2">
                Manage ...
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-8 mb-8">
            <div className="flex justify-around gap-4 py-6">
              <div className='border-r border-gray-300 pr-4'>
                <p className="text-xs text-gray-500">CARD NUMBER</p>
                <p className="flex items-center">
                  5540 2280 8647 5687
                  <Copy className="size-8 ml-2 cursor-pointer" />
                </p>
              </div>
              <div className='border-r border-gray-300 pr-4'>
                <p className="text-xs text-gray-500">EXPIRE DATE</p>
                <p>08/28</p>
              </div>
              <div className='border-r border-gray-300 pr-4'>
                <p className="text-xs text-gray-500">CVC</p>
                <p className="flex items-center">
                  *** <Eye className="size-8 ml-2 cursor-pointer" />
                </p>
              </div>
              <div className=' '>
                <p className="text-xs text-gray-500">STATUS</p>
                <p>Virtual</p>
              </div>
            </div>

            <div className="flex justify-between gap-4 border-t border-gray-300 py-6">
              <div className=' w-full '>
                <h3 className="text-lg font-semibold mb-2">Spending limits</h3>
                <p className="text-xs text-gray-500 mb-1">DAILY TRANSACTION LIMIT</p>
                <div className="flex items-center">
                  <Progress value={10} className="flex-1 mr-4" />
                  <span className="text-sm">10%</span>
                </div>
                <p className="text-sm mt-1">$199.00 spent of $2,000.00</p>
              </div>
              <div className=' w-full  bg-green-200'>
                <p className='p-8'>Estimated Amount for this month: $2,000.00</p>
              </div>
            </div>

            <div className="border-t border-gray-300 py-6">
              <div className="flex gap-2 items-center mb-2">
                <h3 className="text-lg font-semibold">Issued access</h3>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">2</span>
              </div>
              {/* <div className="space-y-4"> */}
              <div className="flex justify-between gap-3 items-center">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ellen Wilson" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Ellen Wilson</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Shutterstock 350</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">$1,649.00 / year</span>
                  <ChevronRight className="size-8" />
                </div>
              </div>
              {/* </div> */}

              <div className="flex justify-between gap-3 items-center">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Margo Madison" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Margo Madison</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Webflow Business Pro</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">$59.00 / month</span>
                  <ChevronRight className="size-8" />
                </div>
              </div>
            </div>


            <div className='border-t border-gray-300 py-6'>
              <h3 className="text-lg font-semibold mb-2">Recent transactions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
                      D
                    </div>
                    <div>
                      <p className="text-lg font-medium">Dropbox</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className="text-lg text-gray-500">Dec 20, 2021</p>
                    <span className="mr-2 bg-gray-200 px-2 py-1 rounded text-lg">monthly</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">- $299.00</span>
                    <ChevronRight className="size-8 ml-2" />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">
                      Z
                    </div>
                    <div>
                      <p className="text-lg font-medium">Zendesk</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className="text-lg text-gray-500">Dec 19, 2021</p>
                    <span className="mr-2 bg-gray-200 px-2 py-1 rounded text-lg">annual</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xl font-bold">- $1490.00</span>
                    <ChevronRight className="size-8 ml-2" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </main >
    </div >
  )
}