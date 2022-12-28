enum PTSite {
  MTeam = "M-Team",
  FRDS = "FRDS",
  SSD = "SSD",
  HDChina = "HDChina",
  CHDBits = "CHDBits",
  HDHome = "HDHome",
  U2 = "U2",
  LemonHD = "LemonHD",
  TTG = "TTG",
  PTer = "PTer",
  HDSky = "HDSky",
  GPW = "GPW",
  Audiences = "Audiences",
  JPTV = "JPTV",
  MDU = "MDU",
  BLU = "BLU",
  HUNO = "HUNO",
  ACM = "ACM",
  BeiTai = "BeiTai",
  AB = "AB",
  TL = "TL"
}

export function getSiteIcon(name: string): string {
  if (!name)
    return name;

  /* eslint-disable no-console */
  // console.log(name);
  /* eslint-enable no-console */
  
  return require(`@/assets/site_icons/${name.toLocaleLowerCase()}.png`);
}

export function getGroupName(name: string): string {
  if (!name)
    return "";
    
  name = name.replace(')','');
  const groupName = name.match('(?<=[@-]|[@-]\\s)(\\w*)(?=($|[.]\\w{2,3}$))');
  return groupName ? groupName[1] : "";
}

export function getSiteName(url: string): string {
  try{
    if (url)
    {
      const hostname = new URL(url).hostname.toLocaleLowerCase(); 
      if (hostname.includes("m-team"))
        return PTSite.MTeam;
      else if (hostname.includes("keepfrds"))
        return PTSite.FRDS;  
      else if (hostname.includes("springsunday"))
        return PTSite.SSD;
      else if (hostname.includes("hdchina"))
        return PTSite.HDChina;
      else if (hostname.includes("chdbits"))
        return PTSite.CHDBits;
      else if (hostname.includes("hdhome"))
        return PTSite.HDHome;
      else if (hostname.includes("dmhy"))
        return PTSite.U2;
      else if (hostname.includes("leaguehd"))
        return PTSite.LemonHD;
      else if (hostname.includes("totheglory"))
        return PTSite.TTG;
      else if (hostname.includes("pterclub"))
        return PTSite.PTer;
      else if (hostname.includes("hdsky"))
        return PTSite.HDSky;
      else if (hostname.includes("greatposterwall"))
        return PTSite.GPW;
      else if (hostname.includes("audiences"))
        return PTSite.Audiences;
      else if (hostname.includes("jptv.club"))
        return PTSite.JPTV;
      else if (hostname.includes("monikadesign"))
        return PTSite.MDU;
      else if (hostname.includes("blutopia"))
        return PTSite.BLU;
      else if (hostname.includes("hawke.uno"))
        return PTSite.HUNO;
      else if (hostname.includes("asiancinema"))
        return PTSite.ACM;
      else if (hostname.includes("beitai"))
        return PTSite.BeiTai
      else if (hostname.includes("animebytes"))
        return PTSite.AB
      else if (hostname.includes("torrentleech") || hostname.includes("tleechreload"))
        return PTSite.TL
    }
  } catch {
    return "";
  }
  
  return "";
}