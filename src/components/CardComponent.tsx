import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import Image from "next/image";
  
  
  const CardComponent = () => {
    return (
     
  <Card>
    <CardHeader>
      <Image src='/logo.png' alt="logo " width={200} height={200}/>
      <CardTitle>T-SHIRT WITH TAPE DETAILS</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex gap-4">

      <p>$120</p>
      
      <p>$140</p>
      <Badge variant="outline">-20% off</Badge>

      </div>

    </CardContent>
    
  </Card>
  
  
     
    )
  }
  
  export default CardComponent