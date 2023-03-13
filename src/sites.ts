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
  TL = "TL",
  OurBits = "OurBits",
  BeyondHD = "BeyondHD",
  MTV = "MTV",
}

export function getSiteIcon(name: string): string {
  if (!name)
    return name;

  /* eslint-disable no-console */
  // console.log(name);
  /* eslint-enable no-console */
  try
  {
    return require(`@/assets/site_icons/${name.toLocaleLowerCase()}.png`);
  } catch {
    return "";
  }
}

export function getGroupName(name: string): string {
  if (!name)
    return "";
    
  name = name.replace(')','');
  const groupName = name.match('(?<=[@-]|[@-]\\s)(\\w*)(?=($|[.]\\w{2,3}$))');
  return groupName ? groupName[1] : "";
}

export function getSiteNameByUrl(url: string): string {
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
        return PTSite.BeiTai;
      else if (hostname.includes("animebytes"))
        return PTSite.AB;
      else if (hostname.includes("torrentleech") || hostname.includes("tleechreload"))
        return PTSite.TL;
      else if (hostname.includes("ourbits"))
        return PTSite.OurBits;
      else if (hostname.includes("morethantv"))
        return PTSite.MTV;
      return hostname;
    }
  } catch {
    return "";
  }
  
  return "";
}

export function getGroupSiteByName(name: string): string {
  const groupName = getGroupName(name).toLocaleLowerCase();
  if (groupName.includes("m-team"))
    return PTSite.MTeam;
  else if (groupName == "frds")
    return PTSite.FRDS;  
  else if (groupName.includes("cmct"))
    return PTSite.SSD;
  else if (groupName == "hdchina" || groupName == "hdctv" || groupName == "hdc" || groupName == "ihd")
    return PTSite.HDChina;
  else if (groupName == "chdbits" || groupName == "chdtv" || groupName == "chdpad" || groupName == "chdhktv"
    || groupName == "stbox" || groupName == "onehd" || groupName == "chdweb" || groupName == "chd")
    return PTSite.CHDBits;
  else if (groupName == "hdhome" || groupName == "hdh" || groupName == "hdhtv" || groupName == "hdhpad"
    || groupName == "hdhweb")
    return PTSite.HDHome;
  else if (groupName == "u2")
    return PTSite.U2;
  else if (groupName == "lhd" || groupName == "i18n" || groupName == "leaguehd" || groupName == "leaguenf" 
    || groupName == "leaguetv" || groupName == "leaguecd" || groupName == "leagueweb" || groupName == "cint"
    || groupName == "leaguesport")
    return PTSite.LemonHD;
  else if (groupName == "ttg" || groupName == "wiki" || groupName == "ngb" || groupName == "doa" || groupName == "arin"
    || groupName == "exren")
    return PTSite.TTG;
  else if (groupName == "pter" || groupName == "pterweb" || groupName == "ptermv" || groupName == "ptergame")
    return PTSite.PTer;
  else if (groupName == "hdsky" || groupName == "hds" || groupName == "hds3d" || groupName == "hdsweb"
    || groupName == "hdspad" || groupName == "hdscd" || groupName == "hdspecial")
    return PTSite.HDSky;
  else if (groupName == "audies" || groupName == "ade" || groupName == "adweb" || groupName == "adaudio"
    || groupName == "adebook" || groupName == "admusic")
    return PTSite.Audiences;
  else if (groupName.endsWith("jptvclub"))
    return PTSite.JPTV;
  else if (groupName == "bluranium" || groupName == "blutonium" || groupName == "consortium" || groupName == "cultfilms"
    || groupName == "damn" || groupName == "isa" || groupName == "jkp" || groupName == "pmp" || groupName == "wildcat")
    return PTSite.BLU;
  else if (groupName == "hone")
    return PTSite.HUNO;
  else if (groupName == "izon3" || groupName == "arin" || groupName == "kawairemux" || groupName == "ulysses")
    return PTSite.ACM;
  else if (groupName == "beitai")
    return PTSite.BeiTai;
  else if (groupName == "ourbits" || groupName == "pbk" || groupName == "ourtv" || groupName == "ilovetv"
    || groupName == "fltth" || groupName == "ao" || groupName == "mgs" || groupName == "ourpad" || groupName == "host"
    || groupName == "ilovehd")
    return PTSite.OurBits;
  else if (groupName == "framestor" || groupName == "bhdstudio" || groupName == "beyondhd" || groupName == "beyondhd"
    || groupName =='z0n3')
    return PTSite.BeyondHD;
  else
    return groupName;
}